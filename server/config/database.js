const mongoose=require("mongoose");
mongoose.set('strictQuery',true);
const connectDatabase=()=>
{
    mongoose.connect("mongodb://0.0.0.0:27017/LeanIn",{useNewUrlParser:true,useUnifiedTopology:true}).then(data=>
        {
            console.log("Db functional");
        })
}
module.exports=connectDatabase;