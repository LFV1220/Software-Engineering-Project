import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header.js';
import Homepage from './components/Homepage.js';
import Menu from './components/Menu.js';
import Reservations from './components/Reservations.js';
import Register from './components/Register.js';
import Login from './components/Login.js';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      {
        /* 
        Renders these components below onto the main page 
        The components (in the components folder) are basically all the parts of the website
        The router/routes changes the page to the component depending on the link
        */
      }
      <Router>
        <Header />

        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Reservations' element={<Reservations />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
