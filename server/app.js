const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const user=require("./routes/userRoute");
const shop=require("./routes/shopRoute");
const errorMiddleware=require("./middleware/error");
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1",user);
app.use("/api/v1",shop);
app.use(errorMiddleware);

module.exports=app;