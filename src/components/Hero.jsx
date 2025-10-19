import React from "react";
import { useNavigate } from "react-router-dom";
import shopImage from "../assets/images/shop.png"; 

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-white via-emerald-50 to-emerald-100 py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left  */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mb-4">
            <span className="block text-slate-900">Welcome to</span>
            <span className="block text-emerald-500">E-commerce</span>
            <span className="block text-base md:text-lg font-medium text-slate-500 mt-2">
              Great finds, honest prices
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Shop smart, live stylish — discover your favorites today!
          </p>

          <button
            onClick={() => navigate("/products")}
            className="bg-emerald-900 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-emerald-700 hover:scale-105 transform transition"
          >
            🛒 Shop Now
          </button>
        </div>

        {/* Right */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={shopImage}
            alt="Shopping illustration"
            className="w-full max-w-md rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
