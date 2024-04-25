import React from 'react'

import { Link } from 'react-router-dom';
import './Login.css';


function Login() {
  return (
    <div className='home'>
      <div>
        <main className="form-signin w-100 m-auto">
          {/* End Login */}
          <form name="BetPlayer" method="post" encType="multipart/form-data">
            <div className="my-4">
              <h2>Admin Login</h2>
            </div>
            <div className="form-floating">
              <input type="text" className="form-control" id="floatingInput" placeholder="Username" name="username" required />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" name="password" id="loginSection-password" placeholder="Password" required />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <Link className="w-100 mt-3 btn btn-lg btn-secondary" type="submit" aria-current="page" to={"/admin/dashboard"}>login</Link>
            {/* <input type="submit" id="login-btn" className="w-100 mt-3 btn btn-lg btn-secondary" name="login" defaultValue="Login" />  */}
          </form>
        </main>
        <footer className="fixed-bottom text-center text-light">
          <div className="bg-secondary p-2">
            2024 © Copyright STEMAGE Consultency. All Rights Reserved Designed by <a href="#">CISS</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Login