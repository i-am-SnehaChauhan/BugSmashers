const app=require("./app");
const connect=require("./config/database");
connect();
const server=app.listen(5000,()=>
{
    console.log("Port Running");
})