const express = require('express');
const router = express.Router();

// Root route
router.get('/', (req, res) => {
  res.send('Hello World');
});

// Sub-route for /users
router.use('/users', require('./users'));

module.exports = router;