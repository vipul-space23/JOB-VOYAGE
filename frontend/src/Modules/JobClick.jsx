import React from 'react';
import './CSS/JobClickmodule.css';
function Jobclick() {
  return (
    <div className="app">
      {/* Nav Bar */}
      <nav className="navbar">
        <h1>Job Voyage</h1>
      </nav>

      {/* Buttons and Search Bar */}
      <div className="top-bar">
        <input type="text" placeholder="Search..." className="search-bar" />
        <button className="new-job-btn">New Job</button>
        <button className="search-btn">Search</button>
      </div>

      {/* Table */}
      <table className="job-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Role</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Applicants</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Company A</td>
            <td>Frontend Developer</td>
            <td>2024-09-26</td>
            <td><button className="edit-btn">Edit</button></td>
            <td>25</td>
          </tr>
          <tr>
            <td>Company B</td>
            <td>Backend Developer</td>
            <td>2024-09-26</td>
            <td><button className="edit-btn">Edit</button></td>
            <td>15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Jobclick;
