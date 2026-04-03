require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('✅ Connected to MongoDB');

  const existing = await User.findOne({ username: 'admin' });
  if (existing) {
    console.log('ℹ️  Admin user already exists. Skipping seed.');
    process.exit(0);
  }

  await User.create({ username: 'admin', password: 'password', role: 'admin' });
  console.log('🌱 Admin user seeded — username: admin | password: password');
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });
