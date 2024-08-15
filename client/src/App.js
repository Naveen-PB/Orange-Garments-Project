import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './pages/Aboutus';
import Contact from './pages/Contact';
import Login from './component/Login';
import Register from './component/Register';
import SearchComponent from './component/Product';

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
          <Route path='/products' element={<SearchComponent/>}/>
          <Route path='/registerform' element={<Register/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
