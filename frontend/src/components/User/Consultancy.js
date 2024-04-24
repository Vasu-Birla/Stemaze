import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './Consultancy.css';
import { Link } from 'react-router-dom';

function Consultancy() {
  return (
    <div className='home'>
        <Navbar/>

            <main id="main" className="sticked-header-offset">
{/* ======= Our Services Section ======= */}
<section id="services" className="services sections-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Tag line will be there</h2>
      <p>Aperiam dolorum et et wuia molestias qui eveniet delop</p>
    </div>
    <div className="row gy-4" data-aos="fade-up" data-aos-delay={100}>
      <div className="col-lg-3 col-md-6">
        <img src="img/02.gif" className="imgfix" />
        <div className="service-item  position-relative">
          <h3>Career Navigation</h3>
          <p>Guidance and support for your career path</p>
          <Link className="time" aria-current="page" to={"/about"}>Book Now</Link>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-3 col-md-6">
        <img src="img/02.jpg" className="imgfix" />
        <div className="service-item  position-relative">
          <h3>Research Guidance</h3>
          <p>Guidance and support for your career path</p>
          <Link className="time" aria-current="page" to={"/about"}>Book Now</Link>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-3 col-md-6">
        <img src="img/03.jpg" className="imgfix" />
        <div className="service-item  position-relative">
          <h3>International Student Support</h3>
          <p>Guidance and support for your career path</p>
          <Link className="time" aria-current="page" to={"/about"}>Book Now</Link>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-3 col-md-6">
        <img src="img/04.jpg" className="imgfix" />
        <div className="service-item  position-relative">
          <h3>For the Organization</h3>
          <p>Guidance and support for your career path</p>
          <Link className="time" aria-current="page" to={"/about"}>Book Now</Link>
        </div>
      </div>{/* End Service Item */}
    </div>
  </div>
</section>{/* End Our Services Section */}

            </main>

        <Footer/>
    </div>
  )
}

export default Consultancy