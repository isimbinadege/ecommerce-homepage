import React from "react";
import ProductCard from "./ProductCard";

function Products() {
  const products = [
    {
      name: "Wireless Headphones",
      price: 59.99,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Smart Watch",
      price: 89.99,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Bluetooth Speaker",
      price: 39.99,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Laptop Bag",
      price: 29.99,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Running Shoes",
      price: 74.99,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Sunglasses",
      price: 24.99,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Smartphone Case",
      price: 14.99,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Wireless Mouse",
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="py-16 bg-emerald-50">
      <h1 className="text-3xl font-extrabold text-center text-emerald-700 mb-8">
        🌟 Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
