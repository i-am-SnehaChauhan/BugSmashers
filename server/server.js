const app=require("./app");
const connect=require("./config/database");
connect();
const server=app.listen(3000,()=>
{
    console.log("Port Running");
})