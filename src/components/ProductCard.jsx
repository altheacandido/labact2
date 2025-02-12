import React from "react";

function ProductCard({ productObj }) {
  const { name, price, image, dateTime } = productObj;

  // Format the date correctly: "Feb 11 10:00"
  const formattedDate = new Date(dateTime).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false, // 24-hour format
  });

  return (
    <div className="card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-date">{formattedDate}</div>
      <p className="product-name">{name}</p>
      <p className="product-price">₱{price.toLocaleString()}.00</p>
    </div>
  );
}

export default ProductCard;
