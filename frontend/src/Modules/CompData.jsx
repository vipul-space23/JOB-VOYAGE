import React, { useState } from 'react';
import './CSS/CompData.css';

const CompData = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    description: '',
    website: '',
    location: '',
  });

  const [logo, setLogo] = useState(null);
  const [message, setMessage] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setLogo(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const endpoint = 'http://localhost:5000/api/company/register';
    
    // Prepare the form data with the file
    const formDataToSend = new FormData();
    formDataToSend.append('companyName', formData.companyName);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('website', formData.website);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('logo', logo); // Append the logo file

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formDataToSend, // Send FormData (not JSON)
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Company registered successfully!');
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage('Something went wrong!');
    }
  };

  return (
    <div className="container">
      <h2>Register Company</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="companyName">Company Name:</label><br />
          <input 
            type="text" 
            id="companyName" 
            name="companyName" 
            value={formData.companyName}
            onChange={handleChange}
            required 
          /><br /><br />

          <label htmlFor="description">Description:</label><br />
          <textarea 
            id="description" 
            name="description" 
            rows="4" 
            cols="50" 
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea><br /><br />

          <label htmlFor="website">Website:</label><br />
          <input 
            type="url" 
            id="website" 
            name="website" 
            value={formData.website}
            onChange={handleChange}
            required 
          /><br /><br />

          <label htmlFor="location">Location:</label><br />
          <input 
            type="text" 
            id="location" 
            name="location" 
            value={formData.location}
            onChange={handleChange}
            required 
          /><br /><br />

          <label htmlFor="logo">Upload Logo:</label><br />
          <input 
            type="file" 
            id="logo" 
            name="logo" 
            accept="image/*" 
            onChange={handleFileChange}
            required 
          /><br /><br />
          <div id="submit">
          {/* Changed the value from "Submit" to "Update" */}
          <input type="submit" value="Update" />
          </div>
      </form>
    </div>
  );
};

export default CompData;
