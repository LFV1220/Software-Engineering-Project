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
import items from './components/menuData.js';
import OrderHistory from './components/OrderHistory.js';
import ReservationHistory from './components/ReservationHistory.js';

function App() {
  const [isSignedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState('');
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);

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
          <Route path='/Register' element={<Register setSignedIn={setSignedIn} setUser={setUser} />} />

          <Route path='/OrderHistory' element={<OrderHistory orders={orders} />} />
          <Route path='/ReservationHistory' element={<ReservationHistory reservations={reservations} />} />

          <Route path='/Menu' element={<Menu isSignedIn={isSignedIn} cart={cart} setCart={setCart} />} />
          <Route path='/Reservations' element={<Reservations reservations={reservations} setReservations={setReservations} />} />
          <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} orders={orders} setOrders={setOrders} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
