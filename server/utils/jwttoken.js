const sendToken=(user,statusCode,res)=>{
    const token=user.getJWTtoken();

    const options={
        expires:new Date(Date.now()+5*24*60*60*1000),
        httponly:true
    }
    console.log(token);
    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        user,
        token
    })
}
module.exports=sendToken;