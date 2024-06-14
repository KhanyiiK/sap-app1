import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
//import Products from "../components/Products";
import Slider from "../components/Slider";
import { popularProducts } from "../data"; // Adjust path as per your project structure
import { Link } from "react-router-dom";
import styled from "styled-components";

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
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%; /* Ensure image does not exceed container width */
  cursor: pointer;
`;

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
