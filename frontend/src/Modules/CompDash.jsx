import React, { useState } from 'react';
import './CSS/CompDash.css'; // Import your CSS file
import tcs from '../images/tcs.png'; 
import infosys from '../images/infosys.png';
import wipro from '../images/wipro.png';

const CompDash = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [companies, setCompanies] = useState([
    { logo: tcs, name: 'Tata Consultancy Services', date: '2024-09-30', location: 'Mumbai', id: 1 },
    { logo: infosys, name: 'Infosys', date: '2024-09-29', location: 'Bangalore', id: 2 },
    { logo: wipro, name: 'Wipro', date: '2024-09-28', location: 'Pune', id: 3 },
  ]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddCompany = () => {
    // Logic to add company goes here
    alert('Add Company button clicked!');
  };

  const handleEditCompany = (id) => {
    // Logic to edit company goes here
    alert(`Edit company with ID: ${id}`);
  };

  const handleDeleteCompany = (id) => {
    setCompanies(companies.filter(company => company.id !== id));
  };

  return (
    <div className="compDash">
      <div className="searchContainer">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Company..."
          className="searchBar"
        />
        <button className="addButton" onClick={handleAddCompany}>Add Company</button>
      </div>

      <table className="companiesTable">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {companies
            .filter(company => company.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map(company => (
              <tr key={company.id}>
                <td><img src={company.logo} alt={company.name} className="logo" /></td>
                <td>{company.name}</td>
                <td>{company.date}</td>
                <td>{company.location}</td>
                <td className='btn-container'>
                  <button className="editButton" onClick={() => handleEditCompany(company.id)}>Edit</button>
                  <button className="deleteButton" onClick={() => handleDeleteCompany(company.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompDash;
