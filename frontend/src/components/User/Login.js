import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className='home'>
        <Navbar/>
          
            <main id="main" className="sticked-header-offset">
              <section id="login" className="login">
                <div className="container" data-aos="fade-up">
                  <div className="section-header">
                    <i className="bi bi-person-badge flex-shrink-0" />
                    <h2>Professional Profile</h2>
                    <p>Login With</p>
                  </div>
                  <div className="row gx-lg-0 gy-4">
                    <div className="col-lg-3" />
                    <div className="col-lg-6">
                      <form className="php-email-form1">
                        <div className="row">
                          <div className="col-md-12 form-group mt-3 mt-md-0">
                            <label>Email ID</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Enter your username" required />
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
                           <center><Link className="inputbutton" type="submit" aria-current="page" to={"/profile"}>Login</Link></center>
                          {/* <button type="submit">Login</button> */}
                        </div>
                        <div className="form-group mt-3">
                          <center><Link className="inputbutton" type="submit" aria-current="page" to={"/signup"}>Signup</Link></center><br /><br />
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

export default Login