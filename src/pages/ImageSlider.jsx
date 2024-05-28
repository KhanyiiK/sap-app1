// ImageSliderPage.js
import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider'; // Adjust the import path as necessary

const ImageSliderPage = () => {
  const slides = [
    { url: "/Images/Wireframes.jpg", title: "wireframe" },
    { url: "/Images/Wireframe.jpg", title: "boat" },
    { url: "/Images/1.jpg", title: "forest" },
    { url: "/Images/2.jpg", title: "city" },
    { url: "/Images/3.jpg", title: "italy" },
    { url: "/Images/4.jpg", title: "italy" },
    { url: "/Images/5.jpg", title: "italy" },
    { url: "/Images/6.jpg", title: "italy" },
    { url: "/Images/7.jpg", title: "italy" },
  ];

  const containerStyles = {
    width: "800px",
    height: "500px",
    margin: "0 auto",
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <h1>Design Section</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default ImageSliderPage;
