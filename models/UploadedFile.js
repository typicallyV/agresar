const mongoose = require('mongoose');

const uploadedFileSchema = new mongoose.Schema({
  originalName:  { type: String, required: true },
  storedName:    { type: String, required: true },
  mimeType:      { type: String },
  size:          { type: Number },
  category:      { type: String, enum: ['document', 'photo', 'other'], default: 'other' },
  description:   { type: String, default: '' },
  uploadedBy:    { type: String },
  uploadedAt:    { type: Date, default: Date.now }
});

module.exports = mongoose.model('UploadedFile', uploadedFileSchema);
