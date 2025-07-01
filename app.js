const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? " Loaded" : " Not Loaded");

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/contactform")
  .then(() => console.log(" MongoDB connected"))
  .catch(err => console.error(" MongoDB connection error:", err));

  const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
}

});

// Mongoose Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});
const Contact = mongoose.model("Contact", contactSchema);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'static')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'static','index.html'));
});

// Routes
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const data = new Contact({ name, email, subject, message });
  await data.save();

  //  email 
  const mailOptions = {
    from: `"Portfolio Contact" <hritickkumar3138@gmail.com>`,   // sender address
    to: "hritickkumar3138@gmail.com",                          // your inbox
    subject: `New Contact Form: ${subject}`,
    html: `
      <h3>You got a new message from your portfolio contact form</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(" Email failed:", err);
      res.status(500).send(" Message saved, but email failed.");
    } else {
      console.log(" Email sent:", info.response);
      res.send("<h2> Message saved & emailed successfully!</h2><a href='/'>Back</a>");
    }
  });
});


// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
