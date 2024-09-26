import React, { useState, useEffect } from 'react';
import './CSS/EmployeeDash.css';
import { useNavigate } from 'react-router-dom';

const FormWithSearch = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [image, setImage] = useState(null); // State to hold the uploaded image
  const navigate = useNavigate();

  // Company data
  const [companies, setCompanies] = useState([
    { name: "Tata Consultancy Services", designation: "Software Engineer", location: "Mumbai", date: "2024-09-22"},
    { name: "Infosys", designation: "Product Manager", location: "Bangalore", date: "2024-08-10"},
    { name: "Wipro", designation: "UX Designer", location: "Hyderabad", date: "2024-07-15"},
    { name: "HCL Technologies", designation: "Data Scientist", location: "Noida", date: "2023-12-05"},
    { name: "Tech Mahindra", designation: "HR Manager", location: "Pune", date: "2024-03-20" },
    { name: "Mindtree", designation: "Frontend Developer", location: "Chennai", date: "2024-06-30"},
    { name: "L&T Infotech", designation: "Project Manager", location: "Mumbai", date: "2024-01-10" },
    { name: "Mphasis", designation: "Marketing Specialist", location: "Bangalore", date: "2024-05-12"},
    { name: "Cognizant", designation: "DevOps Engineer", location: "Kolkata", date: "2024-08-18" },
    { name: "Accenture", designation: "QA Engineer", location: "Gurgaon", date: "2024-04-22" },
    { name: "Zensar Technologies", designation: "Backend Developer", location: "Pune", date: "2024-07-25"},
    { name: "TCS Digital", designation: "Business Analyst", location: "Hyderabad", date: "2024-02-14"},
  ]);

  // Filtering companies based on search input
  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle image upload and save to localStorage
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        setImage(imageData);
        localStorage.setItem('uploadedImage', imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  // Retrieve image from localStorage when the component mounts
  useEffect(() => {
    const storedImage = localStorage.getItem('uploadedImage');
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  // Function to handle deleting a company
  const handleDelete = (index) => {
    const updatedCompanies = companies.filter((_, i) => i !== index);
    setCompanies(updatedCompanies);
  };
  const handleNavigate = ()=> navigate("/compdata");

  return (
    <div className="container">
      {/* Search bar and buttons */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">Search</button>
        <button className="add-company-button" onClick={handleNavigate}>Add Job Posting</button>
      </div>

      {/* Section with left content and right image */}
      <div className="content-section">
        <div className="left-content">
          <h2>Welcome Back Dear</h2>
          <p>You have new applications. It is a lot of work for today!<br />So let's start.</p>
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
            <img src={image} alt="Uploaded" className="content-image" />
          ) : (
            <img src="frontend/src/images/placeholder.jpg" alt="Image of Employer" className="content-image" />
          )}
        </div>
      </div>

      {/* Table with company details */}
      <div className="table-section">
        <h2>Job Postings</h2>
        <div className="table-container">
          <table className="employee-table">
            <thead className='table_header'>
              <tr>
                <th>Company Name</th>
                <th>Designation</th>
                <th>Location</th>
                <th>Date</th>
                <th>Actions</th> {/* Added Actions column */}
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.map((company, index) => (
                <tr key={index}>
                  <td>{company.name}</td>
                  <td>{company.designation}</td>
                  <td>{company.location}</td>
                  <td>{company.date}</td>
                  <td>
                    <button className="edit-button">Edit</button> {/* Edit Button */}
                    <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button> {/* Delete Button */}
                    
                  </td>
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
