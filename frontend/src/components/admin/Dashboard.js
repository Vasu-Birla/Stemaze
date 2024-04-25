import React from 'react'
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='home'>
        <Sidebar/>
         <div>
            

<div>
  <div className="p-2">
    <div className="fs-5 fw-bold">Client Details</div>
    <div className="my-3">
      <div className="row g-1">
        {/* Begin Filter */}
        <div className="col-sm-10">
          <form role="form" method="post" encType="multipart/form-data">
            <div className="row g-1">
              <div className="col-sm-3">
                <input type="text" name placeholder="Enter the value" className="form-control form-control-sm" required />
              </div>
              <div className="col-sm-1">
                <input type="submit" className="form-control btn btn-sm btn-info" name="filter" defaultValue="Search" />
              </div>
              <div className="col-sm-8" />
            </div>
          </form>
        </div>
        {/* End Filter */}
        <div className="row g-1">
          <div className="col-sm-2">
            <div className="card bg-c-blue order-card">
              <div className="card-block">
                <h6 className="m-b-20">Number of appointments Today</h6>
                <p className="m-b-0">For Dr. Arindam Dey</p>
                <h2 className="text-right"><span>4</span></h2>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card bg-c-green order-card">
              <div className="card-block">
                <h6 className="m-b-20">Number of appointments Today</h6>
                <p className="m-b-0">For Dr. xxxx</p>
                <h2 className="text-right"><span>4</span></h2>
              </div>
            </div>
          </div>
          <div className="col-sm-8" />
        </div>
      </div>
    </div>
  </div>
  <div className="p-2">
    <table className="table table-bordered table-responsive my-2 table-sm">
      <thead className="bg-opacity-50">
        <tr>
          <th>Client</th>
          <th />
          <th>Appointment Type</th>
          <th>Appointment Status</th>
          <th>Total number of Appointments</th>
          <th>Name of Current organization</th>
          <th>Last Degree</th>
          <th>Bachelor</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        <tr>
          <td><img src="assets/img/all.png" alt /></td>
          <td>Name<br /><a href="profile.html">View Client Details</a></td>
          <td>Group</td>
          <td>
            {/* <span class="badge rounded-pill text-bg-info">Deposit</span> */}
            <input type="submit" className="form-control btn btn-sm btn-secondary" name="filter" defaultValue="Approve /Reject" />
          </td>
          <td>1</td>
          <td>Stemage</td>               
          <td>Bachelor</td>
          <td>India</td>
        </tr>
        <tr>
          <td><img src="assets/img/all.png" alt /></td>
          <td>Name<br /><a href="profile.html">View Client Details</a></td>
          <td>Group</td>
          <td>
            {/* <span class="badge rounded-pill text-bg-info">Deposit</span> */}
            <input type="submit" className="form-control btn btn-sm btn-secondary" name="filter" defaultValue="Approve /Reject" />
          </td>
          <td>1</td>
          <td>Stemage</td>               
          <td>Bachelor</td>
          <td>India</td>
        </tr>
        <tr>
          <td><img src="assets/img/all.png" alt /></td>
          <td>Name<br /><a href="profile.html">View Client Details</a></td>
          <td>Group</td>
          <td>
            {/* <span class="badge rounded-pill text-bg-info">Deposit</span> */}
            <input type="submit" className="form-control btn btn-sm btn-secondary" name="filter" defaultValue="Approve /Reject" />
          </td>
          <td>1</td>
          <td>Stemage</td>               
          <td>Bachelor</td>
          <td>India</td>
        </tr>
        <tr>
          <td><img src="assets/img/all.png" alt /></td>
          <td>Name<br /><a href="profile.html">View Client Details</a></td>
          <td>Group</td>
          <td>
            {/* <span class="badge rounded-pill text-bg-info">Deposit</span> */}
            <input type="submit" className="form-control btn btn-sm btn-secondary" name="filter" defaultValue="Approve /Reject" />
          </td>
          <td>1</td>
          <td>Stemage</td>               
          <td>Bachelor</td>
          <td>India</td>
        </tr>
        <tr>
          <td><img src="assets/img/all.png" alt /></td>
          <td>Name<br /><a href="profile.html">View Client Details</a></td>
          <td>Group</td>
          <td>
            {/* <span class="badge rounded-pill text-bg-info">Deposit</span> */}
            <input type="submit" className="form-control btn btn-sm btn-secondary" name="filter" defaultValue="Approve /Reject" />
          </td>
          <td>1</td>
          <td>Stemage</td>               
          <td>Bachelor</td>
          <td>India</td>
        </tr>
      </tbody>
    </table>
  </div><br /><br />
</div>

         </div>
        <Footer/>
    </div>
  )
}

export default Dashboard