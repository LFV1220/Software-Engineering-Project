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
import Cart from './components/Cart.js';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [isSignedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState('');

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
        <Header isSignedIn={isSignedIn} setSignedIn={setSignedIn} user={user} />

        <Routes>
          <Route exact path='/' element={<Homepage />} />

          <Route path='/Login' element={<Login setSignedIn={setSignedIn} setUser={setUser} />} />
          <Route path='/Register' element={<Register setSignedIn={setSignedIn} />} />

          <Route path='/Menu' element={<Menu isSignedIn={isSignedIn} />} />
          <Route path='/Reservations' element={<Reservations isSignedIn={isSignedIn} />} />
          <Route path='/Cart' element={<Cart />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
