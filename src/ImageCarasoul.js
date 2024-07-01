import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const goToNextImage = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <div className="image-carousel">
      <button onClick={goToPreviousImage}>Previous</button>
      <img src={images[currentImageIndex]} alt="carousel" />
      <button onClick={goToNextImage}>Next</button>
    </div>
  );
};

export default ImageCarousel;
