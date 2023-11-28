import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Contact from './components/Contact';
import Complaint from './components/Complaint';
import Opportunities from './components/Opportunities';
import About from './components/About';
import Register from './components/Register'
const App = () => {
  return (
    <Router>
     <div>
     <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
      <ul class = "navbar-nav">
        <li>
              <Link to="/" class="nav-brand"><img src="./images/VF.png" alt="Website Logo" style={{height:'42px', weight:'42px'}}></img></Link>
        </li>
            <li class="nav-item">
              <Link to="/Home" class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/Register" class="nav-link">Register</Link>
            </li>
            <li class="nav-item">
              <Link to="/Login" class="nav-link">Login</Link>
            </li>
            <li class="nav-item">
              <Link to="/Contact" class="nav-link">Contact</Link>
            </li>
            <li class="nav-item">
              <Link to="/Complaint" class="nav-link">Complaint</Link>
            </li>
            <li class="nav-item">
              <Link to="/Opportunities" class="nav-link">Opportunities</Link>
            </li>
            <li class="nav-item">
              <Link to="/About" class="nav-link">About</Link>
            </li>

          </ul>
      </div>
   </nav>
  <hr />
  </div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Complaint" element={<Complaint />} />
          <Route path="/Opportunities" element={<Opportunities />} />
          <Route path="/Register" element={<Register />} />

        </Routes>
      
      
    </Router>
  );
};

export default App;