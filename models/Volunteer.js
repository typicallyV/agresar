const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  role: { type: String, default: 'Volunteer' },
  joinedDate: { type: Date, default: Date.now },
  active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Volunteer', volunteerSchema);
