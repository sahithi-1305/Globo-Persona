const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  },
  enabled: {
    type: Boolean,
    default: true
  },
  reputation: {
    type: Number,
    default: 100,
    min: 0,
    max: 100
  },
  dailyLimit: {
    type: Number,
    default: 500
  },
  sentCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Account', accountSchema);
