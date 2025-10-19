import React from "react";

function ProductCard({ name, price, image }) {
  // handle Add to Cart button click
  const handleAddToCart = () => {
    console.log(`🛒 Added ${name} to cart`);
  };

  return (
    <div className="border border-emerald-200 rounded-xl p-5 text-center shadow-md hover:shadow-lg transition bg-white">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 mx-auto object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-emerald-700">{name}</h2>
      <p className="text-gray-600 font-medium mb-3">${price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-emerald-900 text-white px-4 py-2 rounded-full font-semibold hover:hover:bg-emerald-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
