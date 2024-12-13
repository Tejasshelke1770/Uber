const express = require('express');
const router = express.Router();
const {body}= require('express-validator')
const {registerCaptain,loginCaptain,getCaptainProfile,logoutCaptain} = require('../controllers/captainController')
const {authCaptain} = require("../middlewares/authMiddleware")


router.post('/register',[body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name at least 3 characters'),
    body('password').isLength({min:6}).withMessage('password at least 6 characters'),
    body('vehicle.color').isLength({min:3}).withMessage('color at least 3 characters'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate at least 3 characters'),
    body('vehicle.capacity').isInt({min:1}).withMessage('capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('invalid vechicle type')
], registerCaptain);

router.post('/login', [ body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 characters long'),
    ],loginCaptain);

router.get('/profile', authCaptain,getCaptainProfile);

router.get('/logout', authCaptain, logoutCaptain )

module.exports = router;