import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
 
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>  
    )
}

export default App
