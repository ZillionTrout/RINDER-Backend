const router = require('express').Router();

// @desc    Index page for the API
// @route   GET /
// @access  Public
router.get('/', async (req, res, next) => {;
  res.send('roll iniciative <a href="https://rollrinder.netlify.app">roll iniciative</a>')
});

module.exports = router;