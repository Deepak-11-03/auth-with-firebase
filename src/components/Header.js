import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate()
  const auth = localStorage.getItem('token')
  const logout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
 
  return (
    <header className="header">
      <span></span>
      <h1>Authentication using firebase</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {auth ? (
          <li onClick={logout}><Link to="#">Logout</Link></li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
      {/* <div>
        <Link to="/login"><button style={{padding:"6px 1.5rem",position:"absolute",top:"1rem",right:"8rem",float:"right"}}>Login</button></Link>
        <Link to="/signup"><button style={{padding:"6px 1.5rem",position:"absolute",top:"1rem",right:"1rem",float:"right"}}>Signup</button></Link>
        </div> */}
    </header>
  );
}

export default Header;
