import React from "react";
import ProductCard from "./ProductCard";
import bagImage from "../assets/images/bag.jpeg";
import bandImage from "../assets/images/band.jpeg";
import bottleImage from "../assets/images/bottle.jpeg";
import brushImage from "../assets/images/brush.jpeg";
import lampImage from "../assets/images/lamp.jpeg";
import glassesImage from "../assets/images/glasses.jpg";
import necklaceImage from "../assets/images/necklace.jpg";
import penImage from "../assets/images/pen.jpg";



function Products() {
  const products = [
    {
      name: "Tote",
      price: 50,
      image: bagImage,
    },
    {
      name: "Bottle",
      price: 80,
      image: bottleImage,
    },
    {
      name: "Head band",
      price: 30,
      image: bandImage,
    },
    {
      name: "Lamp",
      price: 29.99,
      image: lampImage,
    },
    {
      name: "Brush",
      price: 74.99,
      image: brushImage,
    },
    {
      name: "Sunglasses",
      price: 24.99,
      image: glassesImage,
    },
    {
      name: "Necklaces",
      price: 14.99,
      image: necklaceImage,
    },
    {
      name: "Different Pens",
      price: 19.99,
      image: penImage,
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
