
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import App from "../App.jsx";
import Login from "../auth/Login.jsx";
import Register from "../auth/Register.jsx"; 


function Index() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
        
        
        
       
      </Routes>
    </Router>
  );
}
export default Index;