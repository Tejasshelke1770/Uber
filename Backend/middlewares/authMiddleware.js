const userModel = require('../models/userModel');
const BlackListTokenModel = require('../models/blackListTokenModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blackListTokenModel');
const captainModel = require('../models/captainModel');

module.exports.authUser = async(req, res, next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message:"Unauthorized!"})
    }
    
    const isBlackListed = await BlackListTokenModel.findOne({token: token})
    if(isBlackListed){
        return res.status(401).json({message:"unauthorized!"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized!"})
    }
}


module.exports.authCaptain = async (req,res, next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if(!token){
        return res.status(401).json({message:"Unauthorized!"})
    }

    const isBlackListed = await blackListTokenModel.findOne({token:token})
    if(isBlackListed){
        return res.status(401).json({message:"unauthorized!"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;
        next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized!"})
    }

}