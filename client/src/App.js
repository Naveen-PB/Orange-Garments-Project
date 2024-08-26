import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './pages/Aboutus';
import Contact from './pages/Contact';
import Login from './component/Login';
import Register from './component/Register';
import Product from './component/Product';
import Offer from './pages/Offer';
import Wishlist from './component/Wishlist';
import Cart from './component/Cart'; // Import the Cart component
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/registerform' element={<Register/>}/>
          <Route path='/offers' element={<Offer/>}/>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} /> {/* Add this route */}
          <Route path="/services" element={<Services />} /> {/* Ensure Services route is defined */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
