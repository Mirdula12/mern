import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Service from './pages/Service.jsx';
import Contact from './pages/Contact.jsx';
import State from './hooks/State.jsx';
import Info from './pages/Info.jsx'; // Your personal info page

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/state" element={<State />} />
        <Route path="/info" element={<Info />} /> {/* Only Info page shows personal info */}
      </Routes>
    </>
  );
};

export default App;
