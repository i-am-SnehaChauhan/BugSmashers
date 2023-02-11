const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt=require("jsonwebtoken");
const User=require("../models/userModel");

exports. isAuthenticated=catchAsyncErrors(async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return next(new ErrorHandler("Plese Login",401));
    }
 const decodedData=jwt.verify(token,"LEANIN");
 console.log(decodedData);
  req.user=await User.findById(decodedData.id);
 next();
})
