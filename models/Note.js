const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title:        { type: String, required: true },
  content:      { type: String, required: true }, // stored AES-encrypted
  tags:         [{ type: String }],
  isDone:       { type: Boolean, default: false },
  priority:     { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  createdBy:    { type: String },
  createdAt:    { type: Date, default: Date.now },
  updatedAt:    { type: Date, default: Date.now }
});

noteSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Note', noteSchema);
