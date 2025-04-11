require('dotenv').config();  // Loads .env file into process.env
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const distPath = path.resolve(__dirname, '..', 'dist');

// CORS Configuration Options
// CORS (only allow your domain in production)
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://barringtonhebert.com'
    : ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.use(express.static(path.resolve(distPath)));

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});
// SERVER CONNECTION
app.listen(port, () => {
  console.log(`\
    Listening at:\n \n http://127.0.0.1:${port} \n\n http://localhost:${port}
    `);
  });
  
  // app.get('/*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
  // });