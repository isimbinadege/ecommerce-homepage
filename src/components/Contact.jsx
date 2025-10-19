import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 bg-emerald-50">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-emerald-900 mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-center text-gray-700 mb-12">
          Have questions or feedback? Reach out to us via the form below or use our contact details.
        </p>

        <div className="mb-10 text-center">
          <p>Email: <span className="font-semibold text-emerald-700">support@ecommerce.com</span></p>
          <p>Phone: <span className="font-semibold text-emerald-700">+250 123 456 789</span></p>
          <p>Address: <span className="font-semibold text-emerald-700">Kigali, Rwanda</span></p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
