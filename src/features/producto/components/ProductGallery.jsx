import { useState } from 'react';

const ProductGallery = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cleanImages = images.map(img => img.replace(/["[\]]/g, ''));

  return (
    <div className="gallery-section">
      <div className="thumbnail-list">
        {cleanImages.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`${title} thumbnail ${index}`} 
            className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <img src={cleanImages[activeIndex]} alt={title} className="main-image" />
    </div>
  );
};

export default ProductGallery;
