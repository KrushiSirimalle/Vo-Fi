import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Complaint from './components/Complaint';
import Opportunities from './components/Opportunities';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Register from './components/Register';
import Profile from './components/Profile';
import Open from './components/Open'; 
import About from './components/About';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Open />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Complaint" element={<Complaint />} />
          <Route path="/Opportunities" element={<Opportunities />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Experience" element={<Experience />} />

        </Routes>
      
      
    </Router>
    
  );
};

export default App;