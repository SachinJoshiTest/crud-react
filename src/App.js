import React, { Component, useState } from "react";
import './App.css';
import Navigation from "./Navigation";
import UserDetails from "./components/UserDetails";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Login from "./components/Login";
import Pricing from "./Pricing";
import Home from "./components/Home";
import ResumeBuilder from "./components/ResumeBuilder";

function App() {
  const [count, setCount] = useState(1);
  return (
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route exact path="/crud-react/" element={<Login />}></Route>
          <Route exact path="/crud-react/users" element={<UserDetails />}></Route>
          <Route exact path="/crud-react/aboutus" element={<AboutUs />}></Route>
          <Route exact path="/crud-react/pricing" element={<Pricing />}></Route>
          <Route exact path="/crud-react/home" element={<Home />}></Route>
          <Route exact path="/crud-react/resumeBuilder" element={<ResumeBuilder />}></Route>
        </Routes>
      </Router>

  );
}

export default App;
