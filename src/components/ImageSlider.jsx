import React, { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "pink",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "pink",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  overflow: "hidden",
};

const thumbnailsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
  width: "100%",
};

const thumbnailStyle = {
  width: "100px",
  height: "60px",
  margin: "0 5px",
  cursor: "pointer",
  objectFit: "cover",
  borderRadius: "5px",
  border: "2px solid transparent",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWithBackground = {
    ...slideStyles,
    backgroundImage: `url(${process.env.PUBLIC_URL}${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div onClick={goToPrevious} style={leftArrowStyles}>
        ❰
      </div>
      <div onClick={goToNext} style={rightArrowStyles}>
        ❱
      </div>
      <div style={{ ...slideStylesWithBackground, height: "400px" }}></div>
      <div style={thumbnailsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <img
            key={slideIndex}
            src={`${process.env.PUBLIC_URL}${slide.url}`}
            alt={slide.title}
            style={{
              ...thumbnailStyle,
              border: slideIndex === currentIndex ? "2px solid #000" : "2px solid transparent",
            }}
            onClick={() => goToSlide(slideIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
