import React from 'react'
import Navbar from './ProfileHeader';
import Footer from './Footer';
import './Profile.css'

function Profile() {
  return (
    <div className='home'>
        <Navbar/>
{/* ======= Contact Section ======= */}
<section id="contact" className="profile sticked-header-offset">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Profile</h2>
    </div>
    <div className="row gx-lg-0 gy-4">
      <div className="col-lg-0" />
      <div className="col-lg-12">
        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <label>Name</label>
              <input type="text" name="name" className="form-control" id="name" placeholder="Enter Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <label>Research Gate</label>
              <input type="text" className="form-control" name="email" placeholder="Research gate profile Linked" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 form-group">
              <label>Gender</label>
              <input type="text" name="name" className="form-control" id="name" placeholder="Enter Gender" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <label>LinkedIN</label>
              <input type="text" className="form-control" name="email" id="email" placeholder="LinkedIn profile Linked" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 form-group">
              <label>Email Address</label>
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Email" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <label>Last Degree</label>
              <input type="date" className="form-control" name="email" placeholder="Last Degree" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 form-group">
              <label>Phone Number</label>
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Number" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <label>Year of completion</label>
              <input type="email" className="form-control" name="email" placeholder="Year of completion" required />
            </div>
          </div>
          {/* <div class="form-group mt-3">
          <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
        </div> */}
          <div className="form-group mt-3">
            <label>Research / professtional  Interest:</label>
            <textarea className="form-control" name="message" rows={7} placeholder="Message" required defaultValue={""} />
          </div>
          <div className="text-center"><button type="submit">Submit</button></div>
        </form>
      </div>{/* End Contact Form */}
    </div>
  </div>
</section>{/* End Contact Section */}



        <Footer/>
    </div>
  )
}

export default Profile