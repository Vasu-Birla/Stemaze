import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

import './Service.css';
function Services() {
  return (
    <div className='home'>
        <Navbar/>
          {/* ======= Pricing Section ======= */}
          <section id="pricing" className="pricing sections-bg sticked-header-offset">
            <div className="container" data-aos="fade-up">
              <div className="section-header">
                <h2>Choose your appointment duration</h2>
                <p>Plan</p>
              </div>
              <div className="row g-4 py-lg-5" data-aos="zoom-out" data-aos-delay={100}>
                <div className="col-lg-4">
                  <div className="pricing-item">
                    <h3>30 Minutes</h3>
                    <div className="icon">
                      <i className="bi bi-box" />
                    </div>
                    <h4><sup>₹</sup>299<span> /session</span></h4>
                    <ul>
                      <li><i className="bi bi-check" /> Personalized guidancein</li>
                      <li><i className="bi bi-check" /> Career advice</li>
                      <li><i className="bi bi-check" /> Skill assessment</li>
                    </ul>
                    <div className="text-center"><a href="#" className="buy-btn">Choose</a></div>
                  </div>
                </div>{/* End Pricing Item */}
                <div className="col-lg-4">
                  <div className="pricing-item featured">
                    <h3>45 Minutes</h3>
                    <div className="icon">
                      <i className="bi bi-box" />
                    </div>
                    <h4><sup>₹</sup>399<span> / month</span></h4>
                    <ul>
                      <li><i className="bi bi-check" /> Detailed career roadmap</li>
                      <li><i className="bi bi-check" /> Mock interviews</li>
                      <li><i className="bi bi-check" /> Industry insights</li>
                      <li><i className="bi bi-check" /> Goal setting</li>
                      <li><i className="bi bi-check" /> Follow-up support</li>
                    </ul>
                    <div className="text-center"><a href="#" className="buy-btn">Choose</a></div>
                  </div>
                </div>{/* End Pricing Item */}
                <div className="col-lg-4">
                  <div className="pricing-item">
                    <h3>60 Minutes</h3>
                    <div className="icon">
                      <i className="bi bi-box" />
                    </div>
                    <h4><sup>₹</sup>499<span> / month</span></h4>
                    <ul>
                      <li><i className="bi bi-check" /> Comprehensive career strategy</li>
                      <li><i className="bi bi-check" /> Networking opportunities</li>
                      <li><i className="bi bi-check" /> Internship placements</li>
                      <li><i className="bi bi-check" /> Resume review</li>
                      <li><i className="bi bi-check" /> Cover letter writingt</li>
                    </ul>
                    <div className="text-center"><a href="#" className="buy-btn">Choose</a></div>
                  </div>
                </div>{/* End Pricing Item */}
              </div>
            </div>
          </section>{/* End Pricing Section */}

        <Footer/>
    </div>
  )
}

export default Services