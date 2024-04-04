import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          'https://api.unsplash.com/photos/?client_id=G5oFOjkKk1nVJVdSWfPsuUI_4-jifIkBM6_pYwXtmuQ'
        );
        const data = await response.json();
        setImages(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="image-gallery">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="image-list">
          {images.map((image) => (
            <LazyLoadImage
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              // Additional props for lazy loading
              effect="blur"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
