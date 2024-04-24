import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='home'>
        <Navbar/>

          <main id="main" className="sticked-header-offset">
            <section id="login" className="signup">
              <div className="container" data-aos="fade-up">
                <div className="section-header">
                  <i className="bi bi-person-badge flex-shrink-0" />
                  <h2>Professional Profile</h2>
                  <p>Signup With</p>
                </div>
                <div className="row gx-lg-0 gy-4">
                  <div className="col-lg-3" />
                  <div className="col-lg-6">
                    <form action="#" method="post" className="php-email-form">
                      <div className="row">
                        <div className="col-md-12 form-group mt-3 mt-md-0">
                          <label>Name</label>
                          <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="col-md-12 form-group mt-3 mt-md-0">
                          <label>Email ID</label>
                          <input type="email" className="form-control" name="email" id="email" placeholder="Enter your username" required />
                        </div>
                        <div className="col-md-12 form-group mt-3 mt-md-0">
                          <label>Contact</label>
                          <input type="number" className="form-control" name="contact" id="contact" placeholder="Enter your number" required />
                        </div>
                      </div>
                      <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Enter your password" required />
                      </div>
                      <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                      <div className="form-group mt-3">
                        <button type="submit">Signup</button>
                      </div>
                      <div className="form-group mt-3">
                        <center><Link className="inputbutton" type="submit" aria-current="page" to={"/login"}>Login</Link></center><br /><br />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-3" />
                </div>
              </div>
            </section>
          </main>

        <Footer/>
    </div>
  )
}

export default Signup