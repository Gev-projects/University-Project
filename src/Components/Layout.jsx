import HomePage from "./Home/HomePage";
import React from "react";
import "../tailwind.css"
import StudentsPage from "./Students/StudentsPage"; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function Layout() {
  return (
    <Router>
      <Routes>
         <Route exact path="/" element={<HomePage />} /> 
         <Route path="/faculties/:key" element={<StudentsPage />} />
      </Routes>
    </Router>
  );
}

export default Layout;