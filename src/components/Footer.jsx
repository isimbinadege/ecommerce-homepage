import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copy */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2">🛍️ E-<span className="text-emerald-400">commerce</span></h1>
          <p className="text-sm">&copy; {new Date().getFullYear()} E-commerce. All rights reserved.</p>
        </div>

       
        <div className="flex gap-6 text-sm font-semibold">
          <Link to="/" className="hover:text-emerald-400">Home</Link>
          <Link to="/Products" className="hover:text-emerald-400">Products</Link>
          <Link to="/About" className="hover:text-emerald-400">About</Link>
          <Link to="/Contact" className="hover:text-emerald-400">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-emerald-400"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-emerald-400"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-emerald-400"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-emerald-400"><Linkedin className="w-5 h-5" /></a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
