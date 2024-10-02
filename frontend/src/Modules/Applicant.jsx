import React, { useState, useEffect } from 'react';
import './CSSApplicantmod.css'; // Import CSS file for styling

const Applicant = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [applicants, setApplicants] = useState([
    {
      name: 'John Doe',
      email: 'john@example.com',
      contact: '123-456-7890',
      resume: 'resume.pdf',
      date: '2024-10-01',
      status: 'Pending',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      contact: '987-654-3210',
      resume: 'resume.pdf',
      date: '2024-09-28',
      status: 'Pending',
    },
  ]);

  // Filtered applicants based on search term
  const filteredApplicants = applicants.filter(
    (applicant) =>
      applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.contact.includes(searchTerm)
  );

  // Handle search term input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle action (Accept/Reject)
  const handleAction = (index, action) => {
    const updatedApplicants = [...applicants];
    updatedApplicants[index].status = action;
    setApplicants(updatedApplicants);
  };

  return (
    <div className="applicant-container">
      <h2>Applicant Management</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search by name, email, or contact"
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Table */}
      <table className="applicant-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Resume</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplicants.length > 0 ? (
            filteredApplicants.map((applicant, index) => (
              <tr key={index}>
                <td>{applicant.name}</td>
                <td>{applicant.email}</td>
                <td>{applicant.contact}</td>
                <td>
                  <a href={`/${applicant.resume}`} download>
                    {applicant.resume}
                  </a>
                </td>
                <td>{applicant.date}</td>
                <td>
                  <button
                    className={`accept-btn ${applicant.status === 'Accepted' ? 'active' : ''}`}
                    onClick={() => handleAction(index, 'Accepted')}
                    disabled={applicant.status !== 'Pending'}
                  >
                    Accept
                  </button>
                  <button
                    className={`reject-btn ${applicant.status === 'Rejected' ? 'active' : ''}`}
                    onClick={() => handleAction(index, 'Rejected')}
                    disabled={applicant.status !== 'Pending'}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No applicants found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Applicant;
