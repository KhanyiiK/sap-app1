import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import styled, { keyframes } from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Define keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  padding: 20px;
  animation: ${fadeIn} 2s ease-in; // Apply the fade-in animation
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Content = styled.div`
  line-height: 1.6;
  ${mobile({ fontSize: "14px" })}
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 0 auto 20px auto; // Added margin-bottom for spacing
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const PinkBorder = styled.div`
  border: 2px solid pink;
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
`;

const Button = styled.button`
  background-color: pink;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff69b4;
  }
`;

const Art = () => {
  // Define the URL of the net art website
  const netArtWebsite = "https://example.com"; // Replace with actual URL

  return (
    <div>
      <Announcement />
      <Navbar />
      <Container>
        <Title>Net Art - Colorful Canvas</Title>
        <ImageContainer>
          <Image src={`${process.env.PUBLIC_URL}/Images/Net.png`} alt="Thumbnail" />
        </ImageContainer>
        <PinkBorder>
          <Content>
            <p>
              <b>Description:</b><br />
              "Dynamic Color Canvas: Expressive Digital Art" is an innovative net art piece aimed at 
              democratizing artistic expression through an interactive online platform. Designed to 
              emulate the spontaneity of traditional painting methods, this digital canvas invites users 
              of all skill levels to create vibrant compositions through intuitive click-and-drag interactions.
              By harnessing the power of random color generation, each stroke contributes to a unique visual narrative, 
              encouraging exploration and experimentation in a playful yet accessible manner. This project seeks to 
              bridge the gap between technology and creativity, providing a space where users can freely explore their 
              artistic instincts without the constraints of physical media.
            </p>
            <br />
            <p>
              The inspiration behind "Dynamic Color Canvas" stems from a commitment to making art more inclusive 
              and responsive to the digital age. By embracing unpredictability and chance as integral components 
              of the creative process, the artwork celebrates the joy of spontaneous creation while offering technical 
              solutions to ensure smooth real-time interactions and visually appealing color palettes. Through features 
              like undo/redo functionality and a customizable color palette, users can refine their compositions with 
              ease, fostering a dynamic environment conducive to artistic growth and experimentation.
            </p>
            <br />
            <p>
              Technically, "Dynamic Color Canvas" leverages advanced algorithmic solutions to optimize user experience. 
              From real-time event handling for seamless interaction to sophisticated color generation algorithms based 
              on principles of color theory, the project ensures both aesthetic diversity and coherence. This commitment 
              extends to performance optimization, enabling smooth rendering on various devices and browsers. Ultimately, 
              "Dynamic Color Canvas" aims to empower users to express their creativity boundlessly, embracing the limitless 
              possibilities of digital art in today's interconnected world.
            </p>
            <br />
            {/* Link the button to the net art website */}
            <Link to={netArtWebsite} target="_blank" rel="noopener noreferrer">
              <Button>
                <a href="https://khanyiik.github.io/net-art/">
                View Net Art
                </a>
                </Button>
            </Link>
          </Content>
        </PinkBorder>
      </Container>
    </div>
  );
};

export default Art;

