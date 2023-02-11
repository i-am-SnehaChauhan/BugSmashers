const mongoose=require("mongoose");
const validator=require("validator");
const jwt=require("jsonwebtoken");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please Enter valid email"],
        unique:[true,"Id exists"]
    },
    phn:{
        type:Number,
        required:true,
        unique:true,
        length:[10,"Invalid Phone No."]
    },
    password:{
        type:String,
        required:true,
        minLength:[8,"Enter at least 8 characters"]
    },
    role:{
        type:String,
        default:"user"
    }
})
userSchema.methods.getJWTtoken=function(){
    const token=jwt.sign({id:this._id},"LEANIN");
    return token;
}
module.exports=mongoose.model("User",userSchema);