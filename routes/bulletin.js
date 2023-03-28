const router = require('express').Router();
const Bulletin = require('../models/bulletin');

router.get('/', async (req, res, next) => {
    try {
        const bulletins = await Bulletin.find();
        res.status(200).json(bulletins);
    } catch (error) {
        next(error)
    }
});