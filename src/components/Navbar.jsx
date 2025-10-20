import React, { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Products from "./Products";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex justify-between items-center pt-3 pb-3 pr-8 pl-8 w-full border-b border-emerald-900 bg-gradient-to-r from-white via-emerald-50 to-emerald-100 fixed top-0 z-50'>
      <h1 className='text-emerald-700 font-bold text-3xl italic'>🛍️E-<span className='text-emerald-900 text-xl'>commerce</span></h1>

      <div className='hidden md:flex gap-8 justify-end'>
        <Link to="/" className='text-emerald-900 text-lg font-semibold hover:text-emerald-600'>Home</Link>
        <Link to="/Products" className='text-emerald-900 text-lg font-semibold hover:text-emerald-600'>Products</Link>
        <Link to="/About" className='text-emerald-900 text-lg font-semibold hover:text-emerald-600'>About us</Link>
        <Link to="/Contact" className='text-emerald-900 text-lg font-semibold hover:text-emerald-600'>Contact</Link>
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-emerald-900 focus:outline-none text-2xl"
        >
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-white via-emerald-50 to-emerald-100 w-full absolute top-full left-0 ">
          <Link to="/" className="block px-4 py-3 text-emerald-900 font-semibold hover:bg-emerald-200">Home</Link>
          <Link to="/Products" className="block px-4 py-3 text-emerald-900 font-semibold hover:bg-emerald-200">Products</Link>
          <Link to="/About"className="block px-4 py-3 text-emerald-900 font-semibold hover:bg-emerald-200">About Us</Link>
          <Link to="/Contact" className="block px-4 py-3 text-emerald-900 font-semibold hover:bg-emerald-200">Contact</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
