// Dependencies
const express = require('express');

// Route Imports

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

// Server

server.get('/', (req, res) => {
  res.send({ msg: 'Henlo (OvO")' });
});

const port = 5000;
server.listen(port, () => console.log('Server running on port 5000'));
