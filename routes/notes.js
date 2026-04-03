const express = require('express');
const router = express.Router();
const { body, param, validationResult } = require('express-validator');
const requireAuth = require('../middleware/auth');
const Note = require('../models/Note');

// helper
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ success: false, errors: errors.array() });
  next();
};

// GET all notes
router.get('/', requireAuth, async (req, res) => {
  try {
    const notes = await Note.find().sort({ updatedAt: -1 });
    res.json({ success: true, data: notes });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create note
router.post('/',
  requireAuth,
  [
    body('title').trim().notEmpty().withMessage('Title is required').isLength({ max: 200 }),
    body('content').notEmpty().withMessage('Content is required'),
    body('priority').optional().isIn(['low', 'medium', 'high']),
    body('tags').optional().isArray(),
  ],
  validate,
  async (req, res) => {
    try {
      const note = await Note.create({
        ...req.body,
        createdBy: req.session.user.username
      });
      res.status(201).json({ success: true, data: note });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
);

// PUT update note
router.put('/:id',
  requireAuth,
  [
    param('id').isMongoId().withMessage('Invalid note ID'),
    body('title').optional().trim().notEmpty().isLength({ max: 200 }),
    body('priority').optional().isIn(['low', 'medium', 'high']),
  ],
  validate,
  async (req, res) => {
    try {
      const note = await Note.findByIdAndUpdate(
        req.params.id,
        { ...req.body, updatedAt: new Date() },
        { new: true, runValidators: true }
      );
      if (!note) return res.status(404).json({ success: false, message: 'Note not found' });
      res.json({ success: true, data: note });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  }
);

// PATCH toggle done
router.patch('/:id/toggle',
  requireAuth,
  [param('id').isMongoId()],
  validate,
  async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      if (!note) return res.status(404).json({ success: false, message: 'Note not found' });
      note.isDone = !note.isDone;
      note.updatedAt = new Date();
      await note.save();
      res.json({ success: true, data: note });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
);

// DELETE note
router.delete('/:id',
  requireAuth,
  [param('id').isMongoId()],
  validate,
  async (req, res) => {
    try {
      await Note.findByIdAndDelete(req.params.id);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
);

module.exports = router;
