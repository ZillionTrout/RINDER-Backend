const router = require('express').Router();
const Game = require('../models/Game');
const Campaign = require('../models/Campaign');
const Bulletin = require('../models/Bulletin');

//TRABAJANDO EN ESTO

// view search 1
//games & username

router.get("/", async (res, req, next) => {
    try {
        const game = await Campaign.find({game: game});
        res.status(200).json(game);
    } catch (error) {
        next(error)
    }
});

//view search 2
//campaign
// app.post('/search', async ({body}, res) => {
//     const { requests } = body;
//     const results = await algoliaClient.search(requests);
//     res.status(200).send(results);
//   });

//view search 3
//bulletins

module.exports = router;