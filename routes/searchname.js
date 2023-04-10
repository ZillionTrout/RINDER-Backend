const router = require('express').Router();
const User = require('../models/User');
const { isAuthenticated } = require('../middlewares/jwt');

// @desc    GET Search by name
// @route   GET /searchname
// @access  Private

router.post('/', isAuthenticated, async (req, res, next) => {
    const { username } = req.body;
    try {
        const usernameResult = await User.find({ username }); 
        res.status(200).json(usernameResult);
        console.log(usernameResult);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
