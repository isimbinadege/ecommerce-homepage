import React from "react";

function About() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 text-gray-800">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-emerald-900 mb-6 text-center">
          About Us
        </h1>

        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Welcome to <span className="font-semibold text-emerald-600">E-commerce</span> — 
          your trusted online store for quality products at affordable prices.  
          We bring you the best deals in electronics, fashion, and accessories with 
          a mission to make online shopping simple, reliable, and fun.
        </p>

        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Affordable Prices</h3>
            <p>We make quality accessible to everyone without breaking the bank.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Quality Products</h3>
            <p>Every product is carefully selected to meet your satisfaction and trust.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Customer Support</h3>
            <p>We’re here to assist you every step of the way — before and after purchase.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">Fast Delivery</h3>
            <p>We ensure your orders reach you on time, every time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
