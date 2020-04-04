const express = require('express');

const router = express.Router();

router.get('/users', (req, res) => {
  res.json({
    name: 'Testing',
  });
});

module.exports = router;
