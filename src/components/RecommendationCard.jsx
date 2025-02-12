import React from "react";

function RecommendationCard({ productObj }) {
  return (
    <div className="recommendation-card">
      <img src={productObj.image} alt={productObj.name} />
      <p className="product-name">{productObj.name}</p>
    </div>
  );
}

export default RecommendationCard;
