const express = require('express');
const router = express.Router();

// @route   GET api/profile/
// @desc    Test profile route
// @access  Public

router.get('/profile', (req, res) => res.json({"msg": "Profile Works"}));

module.exports = router;