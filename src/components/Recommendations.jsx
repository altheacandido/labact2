import React from "react";
import RecommendationCard from "./RecommendationCard"; 
import { recommendationsData } from "../data"; // ✅ Import recommendations data

// ✅ Define getRecommendationsData() here
function getRecommendationsData() {
  return recommendationsData.map(product => ({ ...product }));
}

function Recommendations() {
  const items = getRecommendationsData();

  return (
    <section className="recommendations">
      <h2>THE MONSTER Recommendation</h2>
      <div className="recommendation-wrapper">
        <button className="carousel-btn left">&#10094;</button>
        <div className="recommendations-grid">
          {items.slice(0, 3).map((item) => (
            <RecommendationCard key={item.name} productObj={item} />
          ))}
        </div>
        <button className="carousel-btn right">&#10095;</button>
      </div>
    </section>
  );
}

export default Recommendations;
