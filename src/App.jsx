import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
function App() {
 
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Products' element={<Products/>}/>
        </Routes>
      </Router>  
    )
}

export default App
