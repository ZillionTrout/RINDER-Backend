const router = require('express').Router();
const User = require('../models/User');
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

router.get('/', async (req, res, next) => {
    const {username} = req.body;
try {
    usernameResult = await User.findOne({ username: { $in: username } }).populate('username');
        res.status(200).json(usernameResult);
} catch (error) {
next(error)
}
});

module.exports = router;