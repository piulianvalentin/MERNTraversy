const express = require('express');
const router = express.Router();

// @route   GET api/users/
// @desc    Test users route
// @access  Public

router.get('/users', (req, res) => res.json({"msg": "Users Works"}));

module.exports = router;