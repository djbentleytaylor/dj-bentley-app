/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Gallery from './Gallery.jsx';
import './style.css'
import Footer from './Footer.jsx';
import Main from './Main.jsx';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Main />
          </>
        } />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
