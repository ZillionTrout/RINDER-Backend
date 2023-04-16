const router = require('express').Router();
const mongoose = require('mongoose');
const Bulletin = require('../models/Bulletin');
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc    All Bulletins
// @route   GET /bulletins
// @access  Private
router.get('/', isAuthenticated, async (req, res, next) => {
    try {
        const bulletins = await Bulletin.find().populate();
        res.status(200).json(bulletins);
    } catch (error) {
        next(error)
    }
});

// @desc    Get one bulletin
// @route   GET /bulletins/:bulletinId
// @access  Private
router.get("/:bulletinId", isAuthenticated, async (req, res, next) => {
    const {bulletinId} = req.params;
    try {
        const bulletin = await Bulletin.findById(bulletinId);
        res.status(200).json(bulletin);
    } catch (error) {
        console.error(error);
    }
});

// @desc    Get user bulletins
// @route   GET /bulletins/:userId
// @access  Private
router.get("/user/:userId", isAuthenticated, async (req, res, next) => {
    const { userId } = req.params;
    try {
        const userBulletins = await Bulletin.find({ user: mongoose.Types.ObjectId(userId) });
        res.status(200).json(userBulletins);
    } catch (error) {
        console.error(error);
    }
});


// @desc    Create new bulletin
// @route   POST /bulletin
// @access  Private
router.post("/", isAuthenticated, async (req, res, next) => {
    const { userId, username, image, game, campaign, role, modality, place, description } = req.body;
    try {
        await Bulletin.create({ userId, username, image, game, campaign, role, modality, place, description });
        res.status(200).json({ message: 'Hecho!' });
    } catch (error) {
        next(error);
    }
});

// @desc    Edit a bulletin
// @route   PUT /bulletins/:bulletinId
// @access  Private
router.put("/edit/:bulletinId", isAuthenticated, async (req, res, next) => {
    const {bulletinId} = req.params;
    try {
        const response = await Bulletin.findByIdAndUpdate(bulletinId, req.body, {new: true});
        // Enviar una respuesta vacía con código de estado 204
        res.status(204).send();
    } catch (error) {
        next(error);
    }
});

// @desc    Deletes a bulletin
// @route   DELETE /bulletins/:bulletinId
// @access  Private
router.delete("/:bulletinId", isAuthenticated, async (req, res, next) => {
    const {bulletinId} = req.params;
    try {
        const deletedBulletin = await Bulletin.findByIdAndDelete(bulletinId);
            res.status(201).json(deletedBulletin);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;