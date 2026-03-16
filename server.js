require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const validator = require('validator');



const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(cors({
  origin: 'https://yourportfolio.com'|| 'file:///Users/macbook/Desktop/portfolio/index.html' // restrict to your domain
}));

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
    text: `Name: ${validator.escape(fullName)}
Mobile: ${mobile}
Email: ${validator.normalizeEmail(email)}

Message:
${validator.escape(message)}`
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
