const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const User=require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwttoken");
exports.createUser=catchAsyncErrors(async(req,res,next)=>{
    const{name,email,phn,password}=req.body;
    const user=await User.create({
        name:name,
        email:email,
        phn:phn,
        password:password
    })

    sendToken(user,201,res);
});
exports.login=catchAsyncErrors(async(req,res,next)=>{
    const{email,password}=req.body;
   const user= await User.findOne({email:email});
   console.log(user);
   if(!user)
   {
    return next(new ErrorHandler("User Not Found",404))
   }
   if(user.password!=password)
   {
    return next(new ErrorHandler("Wrong Password",401))
   }
  
  sendToken(user,200,res);
})
exports.logout=catchAsyncErrors(async(req,res,next)=>{
   
 res.status(200).cookie("token",null,{expires:new Date(Date.now()),httponly:true}).json({success:true,message:"Logged Out"});
})