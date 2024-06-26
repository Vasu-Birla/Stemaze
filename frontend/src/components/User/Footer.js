import React from 'react';

function Footer() {
  return (
    
<div>
  <footer id="footer" className="footer">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-info">
          <a href="index.html" className="logo d-flex align-items-center">
              <img src="img/logo.png" alt="" />
          </a>
          <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
          <div className="social-links d-flex mt-4">
            <a href="/#" className="twitter"><i className="bi bi-twitter" /></a>
            <a href="/#" className="facebook"><i className="bi bi-facebook" /></a>
            <a href="/#" className="instagram"><i className="bi bi-instagram" /></a>
            <a href="/#" className="linkedin"><i className="bi bi-linkedin" /></a>
          </div>
        </div>
        <div className="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/">About us</a></li>
            <li><a href="/#">Services</a></li>
            <li><a href="/#">Terms of service</a></li>
            <li><a href="/#">Privacy policy</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="/#">Web Design</a></li>
            <li><a href="/#">Web Development</a></li>
            <li><a href="/#">Product Management</a></li>
            <li><a href="/#">Marketing</a></li>
            <li><a href="/#">Graphic Design</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>
            A108 Adam Street <br />
            New York, NY 535022<br />
            United States <br /><br />
            <strong>Phone:</strong> +1 5589 55488 55<br />
            <strong>Email:</strong> info@example.com<br />
          </p>
        </div>
      </div>
    </div>
    <div className="container mt-4">
      <div className="copyright">
        © Copyright <strong><span>STEMAGE Consultency</span></strong>. All Rights Reserved Designed by <span>CISS</span>
      </div>
    </div>
  </footer>
  <a href="/#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>

</div>

  );
}

export default Footer;