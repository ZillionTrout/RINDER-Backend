const router = require('express').Router();
const User = require('../models/User');
const Bulletin = require('../models/Bulletin');
const Pointed = require('../models/Pointed')
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc Profile View
// @route GET /profile
// @access Private

router.get("/:userId", isAuthenticated, async (req, res, next) => {
    const { _id} = req.payload;
    try {
        const user = await User.findOne({ _id }); 
        res.status(200).json({ user });
        } catch (error) {
        next(error);
    }
});

// @desc Edit profile
// @route PUT /profile
// @access Private

router.put("/edit/:userId", isAuthenticated, async (req, res, next) => {
    const userId = req.payload._id;
    const { avatar, place, rolling, games, description } = req.body; 
    try {
        await User.findByIdAndUpdate(userId, {avatar, place, rolling, games, description});
        res.status(200).json({message: "¡Editado!"})
    } catch (error) {
        next(error)
    }
});

// @desc    Gets another user profile 
// @route   GET /profile/:userId
// @access  Private

router.get("/other/:userId", isAuthenticated, async (req, res, next) => {
    const {userId} = req.params;
    try {
    const otherUser = await User.findById(userId);
    res.status(200).json({otherUser});
    } catch (error) {
        next(error)
    }
});

module.exports = router;