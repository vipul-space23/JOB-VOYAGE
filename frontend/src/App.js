
import Jobclick from './Modules/JobClick';
import JobPosting from './Modules/JobForm';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Modules/Navigation";
import Signup from "./Modules/Signup";
import Login from "./Modules/Login";
import JobData from './Modules/JobData';
import Applicant from './Modules/Applicant';

import CompData from "./Modules/CompData";
import Home from "./Modules/Home";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CompDash from "./Modules/CompData";
import './styles.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem("user"));
    if (userFromStorage) {
      setUser(userFromStorage);
    }
  }, []);

  return (
    <Router>
      <div>
        <Navigation user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
       
          <Route path="/compdata" element={<CompData />} />
          <Route path="/compdash" element={<CompDash />} />
          <Route path="/Jobclick" element={<Jobclick/>} />
          <Route path="/JobPosting" element={<JobPosting/>} />
          <Route path="/JobData" element={<JobData/>} />
          <Route path="/Applicant" element={<Applicant/>} />
          

        

        </Routes>
      </div>
      <ToastContainer
        position="bottom-right"
        style={{ width: '350px' }}
        toastClassName="toast-message"
      />
    </Router>
  );
}

export default App;