import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='home'>
        <Navbar/>

            <main id="main" className="sticked-header-offset">
              <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    <h2>Our Mission</h2>
                    <p>Empowering students with tailored solutions for academic success and career growth.<br /> Join us to unlock your full potential today!</p>
                  </div>
                  <div className="row gy-4">
                    <div className="col-lg-3" />
                    <div className="col-lg-6">
                      <img src="img/our_mission1.png" className="img-fluid rounded-4 mb-4" alt=""  />
                    </div>
                    <div className="col-lg-3" />
                  </div>
                  <div className="section-header">
                    <h2>How can we help your students</h2>
                    <p>At our organization, we are dedicated to guiding students towards a bright future by<br />
                      providing personalized education consultancy and career guidance. We believe in making a positive<br />
                      impact on students' lives, helping them excel in their academic and professional journeys.<br />
                      Our team strives for excellence in every aspect of student support and development.</p>
                  </div><br />
                  <hr />
                </div>
              </section>

              <section id="hero" className="second">
                <div className="container position-relative">
                  <div className="row gy-5" data-aos="fade-in">
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                      <h2>Let's Shape Our Future in a secured way! </h2>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                      <img src="img/our_mission2.png" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay={100} />
                    </div>
                  </div>
                </div>
                <center><Link className="getstarted scrollto" aria-current="page" to={"/contact"}>Contact Us</Link></center><br /><br />
              </section>
            </main>

        <Footer/>
    </div>
  )
}

export default About