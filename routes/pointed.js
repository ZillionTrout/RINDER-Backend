const router = require('express').Router();
const Pointed = require ('../models/Pointed');
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc Pointed List
// @route GET /pointed/list
// @access Private
router.get('/list/:bulletinId', async (req, res, next) => {
    const { bulletinId } = req.params;
    try {
        const pointedList = await Pointed.find({ bulletin: bulletinId });
        res.status(200).json(pointedList);
        } catch (error) {
        next(error);
        }
    });

// @desc    All user's Pointeds 
// @route   GET /pointed/user/userId
// @access  Private
router.get('/user/:userId', isAuthenticated, async (req, res, next) => {
    const { userId }= req.params;
    try {
        const MyPointed = await Pointed.find({userId});
            res.status(200).json(MyPointed);
    } catch (error) {
        next(error);
    }
});

// @ desc Point to bulletin
// @ route POST /pointed/bulletinId
// @ access Private
router.post('/:bulletinId', isAuthenticated, async (req, res, next) => {
    const userId = req.payload._id;
    const { bulletinId } = req.params;
    try {
        const isPointed = await Pointed.findOne({ userId, bulletinId });
            if (isPointed) {
                res.status(200).json(isPointed)
            } else {
                await Pointed.create({ userId, bulletinId });
                res.status(200).json(Pointed)
            }
        } catch (error) {
            next(error)
    }
});

// @desc Users delete their pointed
// @route GET pointed/delete/bulletinId
// @access Private
router.delete('/:bulletinId', isAuthenticated, async (req, res, next) => {
    const userId = req.body;
    const { pointedId } = req.params;
    try {
        await Pointed.findOneAndDelete({ user: userId, pointed: pointedId });
        res.status(200).json({message: 'delete'});
        } catch (error) {
        next(error)
        }
    });

module.exports = router;