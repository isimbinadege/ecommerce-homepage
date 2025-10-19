import React from 'react'
import { useNavigate } from "react-router-dom";
function Hero  () {
      const navigate = useNavigate();
  return (
     <section className="bg-gradient-to-r from-white via-emerald-50 to-emerald-100 text-emarald-900 py-24">
      <div className="container mx-auto text-center px-4">
     <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
  <span className="block text-slate-900">Welcome to</span>
  <span className="block text-emerald-500">E‑commerce</span>
  <span className="block text-sm md:text-base font-medium text-slate-500 mt-2">
    Great finds, honest prices
  </span>
</h1>


        <p className="text-xl md:text-2xl mb-8">
          Shop smart, live stylish — discover your favorites today!
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-white text-orange-500 font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transform transition"
        >
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default Hero