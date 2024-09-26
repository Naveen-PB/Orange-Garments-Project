import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import PrivateRoute from './component/PrivateRoute';
import Home from './component/Home';
import Login from './component/Login';
import About from './pages/Aboutus';
import Contact from './pages/Contact';
import Product from './component/Product';
import Register from './component/Register';
import Offer from './pages/Offer';

import Services from './pages/Services';
import Navbar from './component/Navbar';
import ProductPage from './component/ProductPage';
import Admindashboard from './Admin/Admindashboard';
import AllUsers from './Admin/Allusers';
import Adduser from './Admin/Adduser';
import AdminSales from './Admin/AdminSales';
import Inventory from './Admin/Inventory';
function App() {
  return (
    <AuthProvider> {/* Wrap with AuthProvider */}
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerform" element={<Register />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <Product />
              </PrivateRoute>
            }
          />
          <Route
            path="/offers"
            element={
              <PrivateRoute>
                <Offer />
              </PrivateRoute>
            }
          />
          
        
          <Route
            path="/services"
            element={
              <PrivateRoute>
                <Services />
              </PrivateRoute>
            }
          />
          <Route path="/product/:id" element={<ProductPage/>} />
          {/* <Route path="/admindashboard" element={<Admindashboard/>}/>
          <Route path="allusers" element={<AllUsers />} />
              {/* <Route path="adminSales" element={<AdminSales />} /> */}
              {/* <Route path="inventory" element={<Inventory />} />
              <Route path="announcement" element={<Announcement />} />
              <Route path="aass" element={<Adminmembership />} /> */}
               <Route path="admindashboard" element={<Admindashboard />}>
              <Route path="allusers" element={<AllUsers />} />
              <Route path="adminSales" element={<AdminSales />} />
              <Route path="inventory" element={<Inventory />} />
              {/* <Route path="announcement" element={<Announcement />} />
              <Route path="aass" element={<Adminmembership />} />  */}
            </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
