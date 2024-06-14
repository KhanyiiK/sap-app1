import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";
import { popularProducts } from "../data"; // Adjust path as per your project structure
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

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
  animation: ${fadeIn} 2s ease-in; // Apply the fade-in animation
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  width: calc(25% - 20px); /* 25% width for each item with 20px gap between */
  text-align: center;
  margin-bottom: 20px;
  animation: ${fadeIn} 2s ease-in; // Apply the fade-in animation
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%; /* Ensure image does not exceed container width */
  cursor: pointer;
`;

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <ProductContainer>
        {popularProducts.map((product) => (
          <ProductCard key={product.id}>
            <Link to={product.link}>
              <ProductImage src={product.img} alt={`Product ${product.id}`} />
            </Link>
          </ProductCard>
        ))}
      </ProductContainer>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
