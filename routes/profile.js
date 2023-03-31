const router = require('express').Router();
const User = require('../models/User');
const Bulletin = require('../models/Bulletin');
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc Profile View
// @route GET /profile
// @access Private
router.get("/", async (req, res, next) => {
    const userId  = req.payload;
    try {
        const user = await User.find(userId);
        const userBulletins = await Bulletin.find(userId);
        res.status(200).json({user, userBulletins});
    } catch (error) {
        next(error);
    }
});

// @desc Edit profile
// @route PUT /profile
// @access Private

router.put("/", async (req, res, next) => {
    const userId = req.payload;
    const { place, image, description } = req.body; 
    try {
        await User.findByIdAndUpdate(userId, place, image, description, {new: true});
        res.status(204).json({message: "¡Editado!"})
    } catch (error) {
        next(error)
    }
});

// @desc Delete profile
// @route DELETE /profile
// @access Private

router.delete("/:userId", async (req, res, next) => {
    const {userId} = req.params;
    try {
        const deletedUser =
        await User.findByIdAndDelete(userId);
        await Bulletin.findByIdAndDelete(userId);
            res.status(201).json(deletedUser);
    } catch (error) {
        console.error(error);
    }
});

// @desc    Gets another user profile 
// @route   GET /profile/:userId
// @access  Private
router.get("/:userId", async (req, res, next) => {
    const {userId} = req.params;
    try {
    const otherUser = await User.findById(userId);
    res.status(200).json({otherUser});
    } catch (error) {
        next(error)
    }
});

module.exports = router;


//RUTA DE DELETE (NO FUNCIONA)
// router.delete("/:userId", async (req, res, next) => {
//     const userId = req.payload;
// try {
//     await Bulletin.deleteMany({ userId: User._id });
//     await User.deleteOne({ userId: User._id });
//     req.session.destroy((err) => {
//         if (err) {
//             next(err)
//         } else {
//             res.clearCookie('inked-in-cookie');
//             res.status(201).json(userId)
//         }
//     });
// } catch (error) {
//     next(error);
// }
// });