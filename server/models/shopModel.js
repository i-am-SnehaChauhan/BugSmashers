const mongoose=require("mongoose");
const shopSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    items:[{
        name:{
            type:String,
           
        },
        price:{
            type:Number,
            
        },
        availability:{
            type:String,
            
        },
        Stock:{
            type:Number
        }
      
    }],
    category:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Shop",shopSchema);