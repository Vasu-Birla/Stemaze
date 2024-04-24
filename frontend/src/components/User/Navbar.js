import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <header id="header" className="header d-flex align-items-center sticked">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center" aria-label="link">
            <img src="img/logo.png" alt="" />
          </a>
          <nav id="navbar" className="navbar">
            <ul>
            <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/services"}>The App</Link></li>
              <li><Link to={"/consultancy"}>Consultancy</Link></li>
              <li><Link to={"/team"}>Survey</Link></li>
              <li><Link to={"/blog"}>Blog</Link></li>   
              <li><Link to={"/contact"}>Contact</Link></li>
              <li><Link className="getstarted scrollto" to={"/login"}>Login/Signup</Link></li>
            </ul>
          </nav>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        </div>
      </header>
    </div>
  )
}

export default Navbar