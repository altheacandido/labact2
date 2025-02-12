import React, { useState, useEffect } from "react";

const images = ["/ban1.png", "/ban2.png", "/ban3.png", "/ban4.png", "/ban5.png"];

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextSlide = () => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevSlide = () => setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));

  return (
    <section className="banner-wrapper">
      <button className="banner-btn left" onClick={prevSlide}>&#10094;</button>
      <img src={images[currentImageIndex]} alt="Banner Slide" className="banner-img" />
      <button className="banner-btn right" onClick={nextSlide}>&#10095;</button>
    </section>
  );
}

export default Banner;
