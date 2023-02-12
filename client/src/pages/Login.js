import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../actions/userAction";

const Login = () => {
  const[email,setLoginEmail]=useState("");
  const[password,setLoginPassword]=useState("");
  const{isAuthenticated,loading,error,user}=useSelector(state=>state.user)
  const dispatch=useDispatch();
  const loginSubmit=()=>
  {window.location.href="/";
    dispatch(login(email,password))
  }
useEffect(()=>
{
  if(isAuthenticated)
  {
    window.alert("Succesful");
  }

},[dispatch])

  return (
    
    <>
      <Meta title={"Login"} />
    
<div className="loginPage">
      <Container className="login-wrapper py-5 home-wrapper-2 borderclass">
        <div className="row">
          <div className="col-12">
            <div className="auth-card1">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15" onSubmit={loginSubmit}>
                <CustomInput type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setLoginEmail(e.target.value)} />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setLoginPassword(e.target.value)}
                />
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <Link to="/" className="button signup">
                     Login
                    </Link>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
      </div>
    </>
  );
};

export default Login;