import React from "react";
import ProductCard from "./ProductCard"; 
import { newArrivals } from "../data"; 

function getNewArrivalsData() {
  return newArrivals.map(product => ({ ...product }));
}

function NewArrivals() {
  const items = getNewArrivalsData();

  return (
    <section className="new-arrivals">
      <h2>
        <span>New Arrivals</span>
        <a href="#" className="more-link">More</a>
      </h2>
      <div className="carousel-wrapper">
        <button className="carousel-btn left">&#10094;</button>
        <div className="new-arrival-grid">
          {items.slice(0, 4).map((item) => (
            <ProductCard key={item.id} productObj={item} />
          ))}
        </div>
        <button className="carousel-btn right">&#10095;</button>
      </div>
    </section>
  );
}

export default NewArrivals;
