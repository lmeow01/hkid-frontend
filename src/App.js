import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./Pages/Login"
import Authorization from './Pages/Authorization';

function App() {
  


  return (
    <>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/authorization" element={<Authorization />} />
       </Routes>
    </>
    
  );
}

export default App;
