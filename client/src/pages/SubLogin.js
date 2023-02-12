import { useDispatch } from "react-redux";
import { login } from "../actions/userAction";
import { useState } from "react";


function SubLogin()
{
    const[email,setLoginEmail]=useState("");
    const [password,setLoginPassword]=useState("");
    const dispatch=useDispatch();
    const loginSubmit=()=>{
        dispatch(login(email,password))
        window.location.href="/me";
    }
return (
    <form onSubmit={loginSubmit}>
        <input type="text" name="email" value={email} onChange={(e)=>setLoginEmail(e.target.value)}/>
        <input type="password" name="password" value={password} onChange={(e)=>setLoginPassword(e.target.value)}/>
        <input type="submit" name="submit"/>
    </form>
)
}
export default SubLogin