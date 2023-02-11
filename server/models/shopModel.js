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
        },
        image:{
            type:String
        }
      
    }],
    category:{
        type:String,
        required:true
    },
    Image:{
        type:String

    },
    location:{
        type:String,
  
    }
})
module.exports=mongoose.model("Shop",shopSchema);