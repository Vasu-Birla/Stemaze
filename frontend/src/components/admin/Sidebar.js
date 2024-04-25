import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    
<div>
  
<div>
  <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <button className="btn btn-lg" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand" href="#">ADMIN</a>
      <a href="login.html" className="btn btn-outline-light" role="button"><img src="assets/img/all.png" alt /> | Sign out </a>
    </div>
  </nav>
  <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasExampleLabel"> [ADMIN] </h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="dashboard.html">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="profile.html">Client Details</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="changepassword.html">Change Password</a>
        </li>
        {/* <li class="nav-item dropdown">
         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Games
         </a>
         <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="games/cricket.php">Cricket</a></li>
            <li><a class="dropdown-item" href="games/tennis.php">Tennis</a></li>
            <li><a class="dropdown-item" href="games/football.php">Football</a></li>
            <li><a class="dropdown-item" href="games/basketball.php">Basketball</a></li>
            <li><a class="dropdown-item" href="games/baseball.php">Baseball</a></li>
         </ul>
      </li> */}
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="login.html">Sign out</a>
        </li>
      </ul>
    </div>
  </div>
</div>

</div>

  );
}

export default Sidebar;