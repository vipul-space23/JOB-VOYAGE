import React from 'react';
import Login from './Modules/Login'; // Adjust this path if necessary
import EmployeeDash from './Modules/EmployeeDash';
import CompData from './Modules/CompData';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/compdata" element={<CompData/>}/>
          <Route path="/" element={<EmployeeDash/>}/>
        </Routes>
      </Router>
      
  );
};

export default App;
