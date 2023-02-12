import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare.svg";
import wishlist1 from "../images/7.heart.png";
import user from "../images/8.account.png";
import search from "../images/1.search.png";
import Login from "../images/6.log-in.png";
import help from "../images/5.help.png";
const Header = () => {
  const[keyword,setKeyword]=useState("");
  const filter=()=>
  {
    if(keyword.trim())
    {
      window.location.href=`/shops/${keyword}`
    }
    else{
      window.location.href="/shops"
    }

  }
  return (
    <>
     
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-dark font-weight-bold">ShopHouse</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group form-Container">
                <input type="text" placeholder="Search" class="form-control" onChange={(e)=>setKeyword(e.target.value)}/>
                <span className="input-group-btn">
                   <button className="btn btn-search" onClick={filter}>
                      <img src={search} width="40"/>
                   </button>
                </span>
              </div>
                
                </div>
            
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/account"
                    className="d-flex align-items-center gap-10 text-dark "
                  >
                    <img src={user} alt="Account" width={40}/>
                    <p className="mb-0">
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-dark"
                  >
                    <img src={wishlist1} alt="wishlist" width={40}/>
                    <p className="mb-0">
                      Favourite 
                    </p>
                  </Link>
                </div>
                <div>
                  <Link 
                    to="/login"
                    className="d-flex align-items-center gap-10 text-dark"
                  >
                    <img src={Login} alt="Login"  width={40}/>
                    <p className="mb-0">
                      Log in
                    </p>
                  </Link>
                </div>
                <div>
                  
                   
                    <img src={help} alt="help"  width={40}/>
                    <div className="d-flex flex-column gap-10">
                      <p className="mb-0">Help</p>
                    </div>
                  
          </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <div className="menu-bottom d-flex align-items-center justify-content-center gap-30">
             
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-50 text-dark">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/openStore">Open Store</NavLink>
                    <NavLink to="/product">Explore Products</NavLink>
                    <NavLink to="/blogs">Our stories</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;