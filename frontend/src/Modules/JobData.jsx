import React, { useState } from 'react';
import './CSS/JobDatamod.css'; // Import the CSS file
import axios from 'axios';
import { toast } from 'react-toastify'; 

const JobData = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: '',
    salary: '',
    jobType: '',
    experience: '',
    positions: '',
    location: '',
    company: ''
  });

  const locations = ['New York', 'San Francisco', 'Los Angeles', 'Chicago'];
  const companies = ['Google', 'Facebook', 'Amazon', 'Microsoft'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    try {
        const response = await axios.post('http://localhost:5000/api/job/post', formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` // Use token for authentication if needed
          }
        });
        console.log('Job posted:', response.data);
      } catch (error) {
        console.error('Error posting job:', error.response ? error.response.data : error.message);
      }
    // Handle form submission (e.g., API call)
  };

  return (
    <div className="form-container">
      <h2>Job Data Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* Left Column */}
          <div className="form-column">
            <div className="form-field">
              <label>Title:</label>
              <input 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
              />
            </div>

            <div className="form-field">
              <label>Requirements:</label>
              <textarea 
                name="requirements" 
                value={formData.requirements} 
                onChange={handleChange} 
              />
            </div>

            <div className="form-field">
              <label>Job Type:</label>
              <select 
                name="jobType" 
                value={formData.jobType} 
                onChange={handleChange}
              >
                <option value="">Select Job Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="form-field">
              <label>No. of Positions:</label>
              <input 
                type="number" 
                name="positions" 
                value={formData.positions} 
                onChange={handleChange} 
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="form-column">
            <div className="form-field">
              <label>Description:</label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
              />
            </div>

            <div className="form-field">
              <label>Salary:</label>
              <input 
                type="text" 
                name="salary" 
                value={formData.salary} 
                onChange={handleChange} 
              />
            </div>

            <div className="form-field">
              <label>Experience:</label>
              <input 
                type="text" 
                name="experience" 
                value={formData.experience} 
                onChange={handleChange} 
              />
            </div>

            <div className="form-field">
              <label>Location:</label>
              <select 
                name="location" 
                value={formData.location} 
                onChange={handleChange}
              >
                <option value="">Select Location</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label>Select a Company:</label>
              <select 
                name="company" 
                value={formData.company} 
                onChange={handleChange}
              >
                <option value="">Select Company</option>
                {companies.map((comp, index) => (
                  <option key={index} value={comp}>
                    {comp}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobData;
