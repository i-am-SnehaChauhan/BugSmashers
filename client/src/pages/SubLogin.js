import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";
import { useEffect, useState } from "react";


function SubLogin()
{
    const[email,setLoginEmail]=useState("");
    const [password,setLoginPassword]=useState("");
const{user,error,isAuthenticated}=useSelector(state=>state.user)
    const dispatch=useDispatch();
    const loginSubmit=()=>{
        dispatch(login(email,password))

    }
    console.log(isAuthenticated);
    useEffect(()=>{
       if(isAuthenticated)
       {
        window.location.href="/me"
       }

    },[dispatch])
return (
    <form onSubmit={loginSubmit}>
        <input type="text" name="email" value={email} onChange={(e)=>setLoginEmail(e.target.value)}/>
        <input type="password" name="password" value={password} onChange={(e)=>setLoginPassword(e.target.value)}/>
        <input type="submit" name="submit"/>
    </form>
)
}
export default SubLogin