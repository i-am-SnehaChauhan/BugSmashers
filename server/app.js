const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const user=require("./routes/userRoute");
const shop=require("./routes/shopRoute");
const fileUpload=require('express-fileupload');
const errorMiddleware=require("./middleware/error");
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true
}))
app.use("/api/v1",user);
app.use("/api/v1",shop);
app.use(errorMiddleware);

module.exports=app;