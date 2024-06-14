import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider'; // Adjust the import path as necessary

const ImageSliderPage = () => {
  // Define slides for Design Section
  const designSlides = [
    { url: "/Images/wf1.jpg", title: "Wireframe" },
    { url: "/Images/wf2.jpg", title: "Wireframe" },
    { url: "/Images/wf3.jpg", title: "Wireframe" },
    { url: "/Images/wf4.jpg", title: "Wireframe" },
  ];

  // Define slides for Style Guide Section
  const styleGuideSlides = [
    { url: "/Images/sg1.jpg", title: "StyleGuide" },
    { url: "/Images/sg2.jpg", title: "StyleGuide" },
    { url: "/Images/sg3.jpg", title: "StyleGuide" },
    { url: "/Images/sg4.jpg", title: "StyleGuide" },
    { url: "/Images/sg5.jpg", title: "StyleGuide" },
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

      {/* Design Section */}
      <div>
        <h1>Wireframes</h1>
        <div style={containerStyles}>
          <ImageSlider slides={designSlides} />
        </div>
      </div>

      {/* Style Guide Section */}
      <div>
        <h1>StyleGuide</h1>
        <div style={containerStyles}>
          <ImageSlider slides={styleGuideSlides} />
        </div>
      </div>
    </div>
  );
};

export default ImageSliderPage;
