import React, { useState } from 'react';
import './CSS/JobClickmodule.css';

function Jobclick() {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [jobs, setJobs] = useState([
    { company: 'Tcs', role: 'Frontend Developer', date: '2024-09-26', applicants: 25 },
    { company: 'DMCE', role: 'Backend Developer', date: '2024-09-26', applicants: 15 },
    { company: 'Capgemini', role: 'Full Stack Developer', date: '2024-09-25', applicants: 30 },
    { company: 'Infosys', role: 'Data Scientist', date: '2024-09-24', applicants: 18 }
  ]);

  // Filtering jobs based on search input
  const filteredJobs = jobs.filter(job =>
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      {/* Nav Bar */}
      <nav className="navbar">
        <h1>Job Voyage</h1>
      </nav>

      {/* Buttons and Search Bar */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
          {filteredJobs.map((job, index) => (
            <tr key={index}>
              <td>{job.company}</td>
              <td>{job.role}</td>
              <td>{job.date}</td>
              <td><button className="edit-btn">Edit</button></td>
              <td>{job.applicants}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Jobclick;
