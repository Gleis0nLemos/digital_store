import { useState } from "react";
import PropTypes from 'prop-types';
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';

const Gallery = ({ className, width, height, radius, showThumbs, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState((false));

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const selectImage = (index) => {
    setCurrentIndex(index);
  }

  return (
    <>
      <div 
        className={`relative ${className}`} 
        style={{ width, height }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        <div className="overflow-hidden" style={{ borderRadius: radius }}>
          <img 
            src={images[currentIndex].src} 
            alt={`image ${currentIndex + 1}`} 
            className="w-full h-full object-cover"
            style={{ borderRadius: radius }}
            />
        </div>
        <button
          onClick={prevImage}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 trasform -translate-u-1/2 bg-transparent border-none cursor-pointer ${!isHovered ? 'hidden' : ''} disabled:opacity-50`}
          >
          <img src={arrowLeft} alt="Previous" />
        </button>
        <button 
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer ${!isHovered ? 'hidden' : ''} disabled:opacity:50`}
          >
          <img src={arrowRight} alt="Next" />
        </button>
        {showThumbs ? (
          <div className="flex mt-4 space-x-2">
            {images.map((image, index) => (
              <img
                key={index} 
                src={image.src} 
                alt={`Thumbnall ${index + 1}`} 
                onClick={() => selectImage(index)}
                className={`w-28 h-24 px-4 cursor-pointer ${index === currentIndex ? 'border-2 border-primary' : ''}`}
                style={{ borderRadius: radius }}
                />
              ))}
          </div>  
        ) : (
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <div 
                key={index}
                onClick={() => selectImage(index)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${index === currentIndex ? 'bg-primary' : 'bg-gray-400'}`}
                />
            ))}
          </div>
        )}
      </div>
    </>  
  );
};

Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  showThumbs: PropTypes.bool,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired
    })
  ).isRequired
}

Gallery.defaultProps = {
  showThumbs: true,
}
 
export default Gallery;