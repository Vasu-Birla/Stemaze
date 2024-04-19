import React from 'react'

function Navbar() {
  
  return (
    <div>
  <div>
  <section id="topbar" className="topbar d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@stemaze.com</a></i>
        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 900-900-1001</span></i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a href="#" className="twitter" aria-label="link"><i className="bi bi-twitter"  /></a>
        <a href="#" className="facebook" aria-label="link"><i className="bi bi-facebook" /></a>
        <a href="#" className="instagram" aria-label="link"><i className="bi bi-instagram" /></a>
        <a href="#" className="linkedin" aria-label="link"><i className="bi bi-linkedin" /></a>
      </div>
    </div>
  </section>
  <header id="header" className="header d-flex align-items-center sticked">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="#" className="logo d-flex align-items-center" aria-label="link">
        {/* <h1>STEMAZE<span>Consultency</span></h1> */}
        <img src="img/logo.png" alt="true" />
      </a>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">The App</a></li>
          <li><a href="#testimonials">  Consultancy</a></li>
          <li><a href="#team"> Survey</a></li>
		      <li><a href="#recent-posts">  Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
    </div>
  </header>
</div>

    </div>
  )
}

export default Navbar