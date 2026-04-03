const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { param, validationResult } = require('express-validator');
const requireAuth = require('../middleware/auth');
const UploadedFile = require('../models/UploadedFile');

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif|webp|pdf|doc|docx|xls|xlsx|ppt|pptx|txt|csv|zip|mp4|mp3/;
  const ext = path.extname(file.originalname).toLowerCase().slice(1);
  if (allowed.test(ext)) cb(null, true);
  else cb(new Error('File type not allowed'), false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 50 * 1024 * 1024 } // 50 MB
});

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
  next();
};

// GET all files metadata
router.get('/', requireAuth, async (req, res) => {
  try {
    const files = await UploadedFile.find().sort({ uploadedAt: -1 });
    res.json({ success: true, data: files });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST upload file(s)
router.post('/', requireAuth, upload.array('files', 20), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0)
      return res.status(400).json({ success: false, message: 'No files uploaded' });

    const imageTypes = /jpeg|jpg|png|gif|webp/;
    const saved = await Promise.all(req.files.map(async f => {
      const ext = path.extname(f.originalname).toLowerCase().slice(1);
      const category = imageTypes.test(ext) ? 'photo'
        : ['pdf','doc','docx','xls','xlsx','ppt','pptx','txt','csv'].includes(ext) ? 'document'
        : 'other';
      return UploadedFile.create({
        originalName:  f.originalname,
        storedName:    f.filename,
        mimeType:      f.mimetype,
        size:          f.size,
        category,
        description:   req.body.description || '',
        uploadedBy:    req.session.user.username
      });
    }));

    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET download a file
router.get('/:id/download',
  requireAuth,
  [param('id').isMongoId()],
  validate,
  async (req, res) => {
    try {
      const file = await UploadedFile.findById(req.params.id);
      if (!file) return res.status(404).json({ success: false, message: 'File not found' });
      const filePath = path.join(uploadDir, file.storedName);
      res.download(filePath, file.originalName);
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
);

// DELETE a file
router.delete('/:id',
  requireAuth,
  [param('id').isMongoId()],
  validate,
  async (req, res) => {
    try {
      const file = await UploadedFile.findByIdAndDelete(req.params.id);
      if (file) {
        const filePath = path.join(uploadDir, file.storedName);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      }
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
);

module.exports = router;
