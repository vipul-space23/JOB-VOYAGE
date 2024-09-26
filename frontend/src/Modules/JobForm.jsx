// src/module/JobPosting.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Jobformmod.css'

const JobPosting = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [numberOfPositions, setNumberOfPositions] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form submission logic here
    // For example, sending the data to a server or API

    // Redirect to another page after submission
    navigate('/'); // Redirecting to home page or any other route
  };

  return (
    <div className="job-posting-container">
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter job title"
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter job description"
            required
          />
        </div>
        <div>
          <label>Requirements</label>
          <textarea
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            placeholder="Enter job requirements"
            required
          />
        </div>
        <div>
          <label>Salary</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter salary"
            required
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            required
          />
        </div>
        <div>
          <label>Job Type</label>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            required
          >
            <option value="">Select job type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div>
          <label>Experience Level</label>
          <select
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            required
          >
            <option value="">Select experience level</option>
            <option value="entry">Entry-level</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior-level</option>
          </select>
        </div>
        <div>
          <label>Number of Positions</label>
          <input
            type="number"
            value={numberOfPositions}
            onChange={(e) => setNumberOfPositions(e.target.value)}
            placeholder="Enter number of positions"
            required
          />
        </div>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default JobPosting;
