import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import User from './Components/User.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <User
        name="Mirdula"
        department="CSE"
        skills={['HTML', 'CSS', 'JS', 'JAVA']}
        projects={[
          'Prediction of Stock Market',
          'Smart Question Paper Generator',
          'Food Ordering Website',
        ]}
      />
    </>
  );
};

export default App;
