import React from 'react'
import Navbar from './ProfileHeader';
import Footer from './Footer';
import './Appointment.css'

function Appointment() {
  return (
    <div className='home'>
        <Navbar/>
<div>
  {/* ======= About Us Section ======= */}
  <section id="about" className="about profile sticked-header-offset">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Select Appointment Details</h2>
        <p>Choose Date, Duration &amp; Payment</p>
      </div>
      {/* Calendar 1 - Bootstrap Brain Component */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-6">
            <div className="card widget-card border-light shadow-sm">
              <div className="card-body p-4">
                <div id="bsb-calendar-1" className="fc fc-media-screen fc-direction-ltr fc-theme-bootstrap5 bsb-calendar-theme" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End About Us Section */}
  {/* ======= Second Section ======= */}
  <section id="hero" className="second">
    <div className="container position-relative">
      <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-2" />
        <div className="col-lg-2"><button className="time">9:00 AM</button></div>
        <div className="col-lg-2"><button className="time">9:15 AM</button></div>
        <div className="col-lg-2"><button className="time">9:30 AM</button></div>
        <div className="col-lg-2"><button className="time">9:45 AM</button></div>
        <div className="col-lg-2" />
      </div><br />
      <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-2" />
        <div className="col-lg-2"><button className="time">10:00 AM</button></div>
        <div className="col-lg-2"><button className="time">10:15 AM</button></div>
        <div className="col-lg-2"><button className="time">10:30 AM</button></div>
        <div className="col-lg-2"><button className="time">10:45 AM</button></div>
        <div className="col-lg-2" />
      </div><br />
      <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-2" />
        <div className="col-lg-2"><button className="time">11:00 AM</button></div>
        <div className="col-lg-2"><button className="time">11:15 AM</button></div>
        <div className="col-lg-2"><button className="time">11:30 AM</button></div>
        <div className="col-lg-2"><button className="time">11:45 AM</button></div>
        <div className="col-lg-2" />
      </div><br />
      <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-2" />
        <div className="col-lg-2"><button className="time">12:00 AM</button></div>
        <div className="col-lg-2"><button className="time">12:15 AM</button></div>
        <div className="col-lg-2" />
      </div>
    </div><br /><br />
    <center><a className="getstarted scrollto" href="#">Make the payment</a></center><br /><br />
  </section>
  {/* End Hero Section */}
</div>




        <Footer/>
    </div>
  )
}

export default Appointment