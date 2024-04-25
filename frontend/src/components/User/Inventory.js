import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './Inventory.css';

function Inventory() {
  return (
    <div className='home sticked-header-offset'>
        <Navbar/>
   

{/* ======= Our Team Section ======= */}
<section id="team" className="team">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Inventory</h2>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="row">
          <div className="col-xl-6 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={100}>
            <div className="member">
              <img src="img/11.png" className="img-fluid" alt="" />
              <div className="text-center envent"><i className="bi bi-download" /></div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
            <div className="member">
              <img src="img/12.png" className="img-fluid" alt="" />
              <div className="text-center envent"><i className="bi bi-download" /></div>
            </div>
          </div>
          <br />
          <div className="col-xl-6 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
            <div className="member">
              <img src="img/13.png" className="img-fluid" alt="" />
              <div className="text-center envent"><i className="bi bi-download" /></div>
            </div>
          </div>{/* End Team Member */}
          <div className="col-xl-6 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
            <div className="member">
              <img src="img/14.png" className="img-fluid" alt="" />
              <div className="text-center envent"><i className="bi bi-download" /></div>
            </div>
          </div>{/* End Team Member */}
        </div>
      </div>
      <div className="col-lg-6">
        <div className="row">
          <div className="col-xl-6 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
            <div className="member">
              <img src="img/15.png" className="img-fluid" alt="" />
              <div className="text-center envent"><i className="bi bi-download" /></div>
            </div>
          </div>{/* End Team Member */}
          <div className="col-xl-6 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={400}>
            <div className="member">
              <img src="img/16.png" className="img-fluid" alt="" />
              <div className="text-center envent"><i className="bi bi-download" /></div>
            </div>
          </div><br /><br />{/* End Team Member */}
          <br />
          <div className="col-xl-6 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={400}>
            <div className="member">
              <img src="img/17.png" className="img-fluid" alt="" />
              <div className="text-center envent"><i className="bi bi-download" /></div>
            </div>
          </div>{/* End Team Member */}
          <div className="col-xl-6 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={400}>
            <div className="member">
              <img src="img/18.png" className="img-fluid" alt="" />
              <div className="text-center envent"><i className="bi bi-download" /></div>
            </div>
          </div>{/* End Team Member */}
        </div>
      </div>
    </div>
  </div><br /><br />
  <center><div className="col-lg-4"><button className="time">Need help to prepare your documents?</button></div></center>
</section>{/* End Our Team Section */}


        <Footer/>
    </div>
  )
}

export default Inventory