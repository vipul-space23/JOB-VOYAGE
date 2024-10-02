import React, { useState } from 'react';
import './CSS/JobDash.css';

const JobDash = () => {
  const [jobs, setJobs] = useState([
    {
      companyName: 'Tata Consultancy Services',
      location: 'Mumbai',
      role: 'Software Engineer',
      date: '2024-10-01',
    },
    {
      companyName: 'Infosys',
      location: 'Bengaluru',
      role: 'Systems Analyst',
      date: '2024-09-25',
    },
    {
      companyName: 'Wipro',
      location: 'Pune',
      role: 'Data Scientist',
      date: '2024-09-20',
    },
    {
      companyName: 'HCL Technologies',
      location: 'Chennai',
      role: 'DevOps Engineer',
      date: '2024-08-15',
    },
    {
      companyName: 'Tech Mahindra',
      location: 'Hyderabad',
      role: 'Business Analyst',
      date: '2024-07-10',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const addJob = () => {
    // Placeholder for add job functionality
    alert('Add Job functionality will be implemented here.');
  };

  const filteredJobs = jobs.filter(job => 
    job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="job-dashboard">
      <h2>Job Dashboard</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by company name, location, or role"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="add-job" onClick={addJob}>
          Add Job
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Location</th>
            <th>Role</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map((job, index) => (
            <tr key={index}>
              <td>{job.companyName}</td>
              <td>{job.location}</td>
              <td>{job.role}</td>
              <td>{job.date}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="edit-applicants-btn">Edit Applicants</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobDash;
