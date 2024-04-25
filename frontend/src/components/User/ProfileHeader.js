import React from 'react';
import { Link } from 'react-router-dom';

function Navbarl() {
  return (
    <div>
      <header id="header" className="header d-flex align-items-center sticked">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center" aria-label="link">
            <img src="img/logo.png" alt="" />
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><span class="getstarted scrollto">Stemage</span></li>
              <li><a class="scrollto" href="/profile"><i class="bi bi-bell dropdown-indicator"></i><span class="badge">3</span></a></li>
              <li class="dropdown"><Link to={"/profile"}><i class="bi bi-gear dropdown-indicator"></i></Link>
                <ul>
                  <li><Link to={"/profile"}>Profile</Link></li>
                  <li><Link to={"/appointment"}>Appointment</Link></li>
                  <li><Link to={"/login"}>Logout</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
        </div>
      </header>
    </div>
  )
}

export default Navbarl