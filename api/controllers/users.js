const express = require('express');
const router = express.Router();

// Users route
router.get('/', (req, res) => {
  res.status(200).json([]);
});

module.exports = router;