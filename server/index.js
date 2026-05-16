const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const accountRoutes = require('./routes/accountRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/accounts', accountRoutes);

// Health Check
app.get('/health', (req, res) => res.status(200).json({ status: 'up' }));

// Database Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mailsaas';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log('Database connection error:', err));
