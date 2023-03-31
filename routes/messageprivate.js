const router = require('express').Router();
const User = require('../models/User');
const MessagePrivate = require('../models/Messageprivate');

//TRABAJANDO EN ESTO

// @desc Get Contact view
// @route GET /messageprivate/userId
// @access Private
// router.get('/:userId', async (req, res, next) => {
//     const { userId } = req.payload
//     const mp = req.params;
//     try {
//         const user = await User.findById(userId);
//         const mp = await MessagePrivate.find({ userId: userId }).populate('userId').sort({ createdAt: -1 });
//         userCanSee = []
//         mp.filter(mp=> {
//             if ((userId === user._id )) {
//                 userCanSee.push(mp)
//             } 
//         });
//         const userContact = !(userId === user._id);
//         res.json(204) ({ user, mp, userCanSee, userContact}); 
//     } catch (error) {
//         next(error)
//     }
// });

// @desc MessagePrivate data to database
// @route POST /messageprivate/userId
// @access Private
// router.post('/:userId', async (req, res, next) => {
//     const { comment} = req.body;
//     const user = req.session.currentUser;
//     const { userId } = req.params;
//     try {
//     await Contact.create({  comment, contactform, userId: user._id });
//     res.redirect(`/profile/${userId}`)
//     } catch (error) {
//         next(error)
//     }
// });

//falta crear mensaje, eliminar mensaje

module.exports = router;