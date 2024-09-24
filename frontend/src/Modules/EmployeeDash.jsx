import React, { useState } from 'react';
import './CSS/FormWithSearch.css';

const FormWithSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [image, setImage] = useState(null); // State to hold the uploaded image
  
  const employees = [
    { name: "John Doe", designation: "Software Engineer", location: "New York", date: "2024-09-22" },
    { name: "Jane Smith", designation: "Product Manager", location: "Los Angeles", date: "2024-08-10" },
    { name: "Emily Johnson", designation: "UX Designer", location: "San Francisco", date: "2024-07-15" },
    { name: "Michael Brown", designation: "Data Scientist", location: "Chicago", date: "2023-12-05" },
    { name: "Sarah Williams", designation: "HR Manager", location: "Boston", date: "2024-03-20" },
    { name: "David Lee", designation: "Frontend Developer", location: "Seattle", date: "2024-06-30" },
    { name: "Alice Carter", designation: "Project Manager", location: "Denver", date: "2024-01-10" },
    { name: "Olivia Adams", designation: "Marketing Specialist", location: "Miami", date: "2024-05-12" },
    { name: "James Wilson", designation: "DevOps Engineer", location: "Austin", date: "2024-08-18" },
    { name: "Isabella Clark", designation: "QA Engineer", location: "Dallas", date: "2024-04-22" },
    { name: "William Scott", designation: "Backend Developer", location: "Philadelphia", date: "2024-07-25" },
    { name: "Mia Taylor", designation: "Business Analyst", location: "Atlanta", date: "2024-02-14" },
  ];

  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      {/* Search bar at the top */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Section with left content and right image */}
      <div className="content-section">
        <div className="left-content">
          <h2>Welcome Back Sara</h2>
          <p>You have new applications. It is a lot of work for today!
            <br />So let's start.</p>
          {/* Image Upload Input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="image-upload"
          />
        </div>
        <div className="right-content">
          {/* Display the uploaded image or a placeholder */}
          {image ? (
            <img src={image} alt="Uploaded" className="content-image"/>
          ) : (
            <img src="frontend\src\images" alt="Image of Employeer" className="content-image"/>
          )}
        </div>
      </div>

      {/* Table with employee details */}
      <div className="table-section">
        <h2>Employee Details</h2>
        <div className="table-container">
          <table className="employee-table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Designation</th>
                <th>Location</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.location}</td>
                  <td>{employee.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FormWithSearch;
