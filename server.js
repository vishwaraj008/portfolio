require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const validator = require('validator');
const path = require('path'); // Added path module

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Better CORS (Allow all for now to test, or add your Vercel URL)
app.use(cors());

app.use(bodyParser.json());

// 2. Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// 3. IMPORTANT: Explicitly serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send-inquiry', (req, res) => {
  const { fullName, mobile, email, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const mailOptions = {
    from: validator.normalizeEmail(email),
    to: process.env.EMAIL_USER,
    subject: `Inquiry from ${validator.escape(fullName)}`,
    text: `Name: ${validator.escape(fullName)}\nMobile: ${mobile}\nEmail: ${validator.normalizeEmail(email)}\n\nMessage:\n${validator.escape(message)}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Failed to send inquiry:', error);
      return res.status(500).json({ error: 'Failed to send inquiry' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Inquiry sent successfully' });
  });
});

// For local testing
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;