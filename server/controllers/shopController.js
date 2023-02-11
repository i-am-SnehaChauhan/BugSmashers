const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Shop=require("../models/shopModel");
const ErrorHandler = require("../utils/errorHandler");
const ApiFeatures=require("../utils/apiFeatures");
const cloudinary=require('cloudinary').v2;
cloudinary.config({
    cloud_name:"dlgp2ufmn",
    api_key:"738354633193825",
    api_secret:"SzqyhWymF0CoH2bbDut25UzhTPQ"
})
exports.createShop=catchAsyncErrors(async(req,res,next)=>
{
    const file=req.files.photo;
   
    cloudinary.uploader.upload(file.tempFilePath,async(err,result)=>{
        const{name,category}=req.body;
        const shop=await Shop.create(
         {
             name:name,
             category:category,
             user:req.user._id,
             location:req.user.location,
             Image:result.url
         }
        )
        res.status(200).json({
         success:true,
         shop
        })
        
    })


})
exports.createItems=catchAsyncErrors(async(req,res,next)=>
{
    const shop=await Shop.findById(req.query.shopId);
    if(!shop)
    {
        return next(new ErrorHandler("Shop Not Found",404))
    }
    const{name,price,availability,Stock}=req.body;
    shop.items.push({name:name,price:price,availability:availability,Stock:Stock});
    await shop.save();
    const items=shop.items;
    res.status(200).json({
        success:true,
        items
    })

})
exports.items=catchAsyncErrors(async(req,res,next)=>{
    const shop=await Shop.findById(req.query.shopId);
    if(!shop)
    {
        return next(new ErrorHandler("Shop Not Found",404))
    }
    const items=shop.items;
    res.status(200).json({
        success:true,
        items
    })
})
exports.userShops=catchAsyncErrors(async(req,res,next)=>{
    console.log(req.user._id);
    const shops=await Shop.find({user:req.user._id.toString()});
    if(!shops)
    {
        return next(new ErrorHandler("Shop Not Found",404))
    }
    res.status(200).json({
        success:true,
        shops
    })

})
exports.deleteItem=catchAsyncErrors(async(req,res,next)=>{
    const shop=await Shop.findById(req.query.shopId);

    if(!shop)
    {
        return next(new ErrorHandler("Shop Not Found",404))

    }
    const items=shop.items.filter(rev=>rev._id.toString()!=req.query.itemId.toString());
    console.log(items);
    await Shop.findByIdAndUpdate(req.query.shopId,{items},{new:true,runValidators:true,useFindAndModify:false});
    res.status(200).json({
        success:true,
        message:"Item deleted"
    })



})

exports.shops=catchAsyncErrors(async(req,res,next)=>{
    const apiFeature=new ApiFeatures(Shop.find(),req.query).search().filter();
    const shops= await apiFeature.query;
    console.log(shops);
    if(!shops)
    {
        return next(new ErrorHandler("Shop Not Found",404))
    } 
    res.status(200).json({
        success:true,
        shops
    })
})