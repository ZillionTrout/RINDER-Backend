const router = require('express').Router();
const Bulletin = require('../models/Bulletin');
const { isAuthenticated, isAdmin } = require('../middlewares/jwt');

// @desc    All Bulletins
// @route   GET /bulletins
// @access  Private
router.get('/', isAuthenticated, async (req, res, next) => {
    try {
        const bulletins = await Bulletin.find();
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

// @desc    Create new bulletin
// @route   POST /bulletin
// @access  Private
router.post("/", isAuthenticated, async (req, res, next) => {
    const { userId, game, campaign, role, modality, place, description } = req.body;
    if (!userId|| !game || !campaign|| !role|| !modality|| !place || !description) {
        res.status(400).json({ message: "Rellena todos los datos para poder crear tu anuncio" });
        return;
    }
    try {
        const newBulletin = await Bulletin.create(req.body);
        res.status(201).json(newBulletin);
    } catch (error) {
        console.error(error);
    }
});

// @desc    Edit a bulletin
// @route   PUT /bulletins/:bulletinId
// @access  Private
router.put("/:bulletinId", isAuthenticated, async (req, res, next) => {
    const {bulletinId} = req.params;
    const {  userId, game, campaign, role, modality, place, description } = req.body;
    if (
        !userId|| !game || !campaign|| !role|| !modality|| !place || !description) {
        res
            .status(400)
            .json({ message: "Rellena todos los campos para poder editar tu anuncio" });
        return;
    }
    try {
        const response = await Bulletin.findByIdAndUpdate(bulletinId, req.body, {new: true});
        res.status(204).json(response);
    } catch (error) {
        console.error(error);
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