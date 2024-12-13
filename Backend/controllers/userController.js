const userModel = require("../models/userModel");
const userService = require("../services/userService");
const { validationResult } = require("express-validator");
const blackListTokenModel = require('../models/blackListTokenModel')

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  const { fullname, email, password } = req.body;
  const hashpassword = await userModel.hashpassword(password);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const existingUser = await userModel.findOne({ email });
  if(existingUser){
    return res.status(400).json({ message: "user already exists" });
  }

  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashpassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);
  if(!isMatch){
    return res.status(401).json({message:'Invalid email or password'});
  }

  const token = user.generateAuthToken();
  res.cookie('token', token);
  res.status(200).json({token, user})
};
 
module.exports.getUserProfile = async(req, res, next)=>{
    return res.status(200).json(req.user)
}

module.exports.logOutUser = async(req,res,next)=>{
    res.clearCookie('token')
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blackListTokenModel.create({token});
    res.status(200).json({message: 'Logged out!'})
}