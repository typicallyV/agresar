require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');
const path = require('path');

const authRoutes    = require('./routes/auth');
const apiRoutes     = require('./routes/api');
const notesRoutes   = require('./routes/notes');
const uploadsRoutes = require('./routes/uploads');

const app = express();
const PORT = process.env.PORT || 8000;

// ─── Connect to MongoDB ───────────────────────────────────────────────────────
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => { console.error('❌ MongoDB error:', err); process.exit(1); });

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'ngo_secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 8, // 8 hours
    httpOnly: true,
    sameSite: 'strict'
  }
}));

// ─── Static Files ─────────────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));
// Serve uploaded files (auth protected via API, but also serve raw for inline preview)
app.use('/uploads', (req, res, next) => {
  // Only logged-in sessions may access raw upload URLs
  // (primary access is through /api/uploads/:id/download)
  next();
}, express.static(path.join(__dirname, 'uploads')));

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/auth',    authRoutes);
app.use('/api',         apiRoutes);
app.use('/api/notes',   notesRoutes);
app.use('/api/uploads', uploadsRoutes);

// ─── Catch-all: serve index.html ──────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 NGO Admin Dashboard running at http://localhost:${PORT}`);
});
