const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const crypto = require('crypto');
const requireAuth = require('../middleware/auth');
const multer = require('multer');
const uploadCsv = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.join(__dirname, '..')),
    filename: (req, file, cb) => cb(null, 'volunteers.csv')
  })
});

const deletedCsvIds = new Set();
const Volunteer = require('../models/Volunteer');
const Member = require('../models/Member');
const Event = require('../models/Event');
const Donation = require('../models/Donation');

// ─── STATS ───────────────────────────────────────────────────────────────────
router.get('/stats', requireAuth, async (req, res) => {
  try {
    const [volunteers, members, events, donations] = await Promise.all([
      Volunteer.countDocuments({ active: true }),
      Member.countDocuments({ active: true }),
      Event.countDocuments(),
      Donation.aggregate([{ $group: { _id: null, total: { $sum: '$amount' } } }])
    ]);
    const totalDonations = donations.length ? donations[0].total : 0;
    res.json({ success: true, stats: { volunteers, members, events, totalDonations } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ─── VOLUNTEERS ───────────────────────────────────────────────────────────────
router.get('/volunteers', requireAuth, async (req, res) => {
  try {
    const dbData = await Volunteer.find().sort({ createdAt: -1 }).lean();
    const csvPath = path.join(__dirname, '..', 'volunteers.csv');
    if (!fs.existsSync(csvPath)) {
      return res.json({ success: true, data: dbData });
    }
    
    const csvData = [];
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (row) => {
        // Find existing to prevent duplicates based on email
        const email = row.email || row.Email || '';
        const name = row.name || row.Name || '';
        const uniqueString = email + name;
        const hashId = crypto.createHash('md5').update(uniqueString).digest('hex').substring(0, 20);
        const csvId = 'csv_' + hashId;
        
        if (!deletedCsvIds.has(csvId) && (!email || !dbData.some(v => v.email === email))) {
          csvData.push({
            _id: csvId,
            name: name,
            email: email,
            phone: row.phone || row.Phone || '',
            skills: (row.skills || row.Skills || '').split(',').map(s=>s.trim()).filter(Boolean),
            active: true
          });
        }
      })
      .on('end', () => {
        res.json({ success: true, data: [...csvData, ...dbData] });
      })
      .on('error', (err) => {
        res.status(500).json({ success: false, message: err.message });
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/volunteers/upload', requireAuth, uploadCsv.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });
  res.json({ success: true, message: 'Volunteer CSV updated successfully!' });
});

router.get('/volunteers/download', requireAuth, (req, res) => {
  const csvPath = path.join(__dirname, '..', 'volunteers.csv');
  if (fs.existsSync(csvPath)) {
    res.download(csvPath, 'volunteers.csv');
  } else {
    res.status(404).json({ success: false, message: 'CSV not found. Try uploading one first.' });
  }
});

router.post('/volunteers', requireAuth, async (req, res) => {
  try {
    const vol = await Volunteer.create(req.body);
    res.status(201).json({ success: true, data: vol });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.delete('/volunteers/:id', requireAuth, async (req, res) => {
  try {
    if (req.params.id.startsWith('csv_')) {
      deletedCsvIds.add(req.params.id);
      return res.json({ success: true });
    }
    await Volunteer.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Invalid ID format or server error' });
  }
});

// ─── MEMBERS ─────────────────────────────────────────────────────────────────
router.get('/members', requireAuth, async (req, res) => {
  const data = await Member.find().sort({ createdAt: -1 });
  res.json({ success: true, data });
});

router.post('/members', requireAuth, async (req, res) => {
  try {
    const member = await Member.create(req.body);
    res.status(201).json({ success: true, data: member });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.delete('/members/:id', requireAuth, async (req, res) => {
  await Member.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// ─── EVENTS ───────────────────────────────────────────────────────────────────
router.get('/events', requireAuth, async (req, res) => {
  const data = await Event.find().sort({ date: -1 });
  res.json({ success: true, data });
});

router.post('/events', requireAuth, async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json({ success: true, data: event });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.put('/events/:id', requireAuth, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: event });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.delete('/events/:id', requireAuth, async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// ─── DONATIONS ────────────────────────────────────────────────────────────────
router.get('/donations', requireAuth, async (req, res) => {
  const data = await Donation.find().sort({ date: -1 });
  res.json({ success: true, data });
});

router.post('/donations', requireAuth, async (req, res) => {
  try {
    const donation = await Donation.create(req.body);
    res.status(201).json({ success: true, data: donation });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

router.delete('/donations/:id', requireAuth, async (req, res) => {
  await Donation.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
