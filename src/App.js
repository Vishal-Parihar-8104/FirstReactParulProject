import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Card from './Card';
import Product from './Product'
import Login from './Login';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
       <Route path="/product" element={<Product/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;


