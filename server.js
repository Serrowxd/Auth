// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local');

// Mongoose Connect to MongoDB
mongoose
  .connect('mongodb://localhost/auth')
  .then(() => {
    console.log('\n=== Connected to MongoDB ===\n');
  })
  .catch(err => console.log('database connection failed', err));

// Route Imports
const User = require('./models/user');

// Server
const server = express();
// server.set('view engine', 'ejs'); // allows you to put HTML in a JavaScript file (.ejs)

// Logger
const logger = (req, res, next) => {
  console.log('d-(OvO")z looks correct to me', req.body);

  next();
};

// Middleware
server.use(express.json());
server.use(logger);

const port = 5000;
server.listen(port, () => console.log('Server running on port 5000'));
