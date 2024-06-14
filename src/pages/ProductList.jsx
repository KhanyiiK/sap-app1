import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductItem = styled.div`
  margin: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductList = () => {
  const products = [
    { id: 1, name: "Vitamin C Serum", imageUrl: `${process.env.PUBLIC_URL}/Images/VitC.jpg` },
    { id: 2, name: "Hyaluronic Acid Serum", imageUrl: `${process.env.PUBLIC_URL}/Images/HyA.jpg` },
    { id: 3, name: "Retinol Serum", imageUrl: `${process.env.PUBLIC_URL}/Images/Ret.jpg` },
    { id: 4, name: "Combo Serum", imageUrl: `${process.env.PUBLIC_URL}/Images/ComboS.jpg` },
    { id: 5, name: "Female Serum", imageUrl: `${process.env.PUBLIC_URL}/Images/FemS.jpg` },
    { id: 6, name: "Youthful Glow Serum", imageUrl: `${process.env.PUBLIC_URL}/Images/GlowS.jpg` },
    { id: 7, name: "Hydrating Facial Cleanser", imageUrl: `${process.env.PUBLIC_URL}/Images/Cleanser.jpg` },
    { id: 8, name: "Moisturizing Night Cream", imageUrl: `${process.env.PUBLIC_URL}/Images/NightCream.jpg` },
    { id: 9, name: "Brightening Vitamin C Cream", imageUrl: `${process.env.PUBLIC_URL}/Images/VitCream.jpg` },
    { id: 10, name: "Anti-Aging Eye Cream", imageUrl: `${process.env.PUBLIC_URL}/Images/EyeC.jpg` },
    { id: 11, name: "Exfoliating Facial Scrub", imageUrl: `${process.env.PUBLIC_URL}/Images/Scrub.jpg` },
    { id: 12, name: "Hydrating Sheet Mask", imageUrl: `${process.env.PUBLIC_URL}/Images/Mask.jpg` },
    { id: 13, name: "Matte Lipstick", imageUrl: `${process.env.PUBLIC_URL}/Images/Lips.jpg` },
    { id: 14, name: "Liquid Foundation", imageUrl: `${process.env.PUBLIC_URL}/Images/Found.jpg` },
    { id: 15, name: "Eyeshadow Palette", imageUrl: `${process.env.PUBLIC_URL}/Images/Shadow.jpg` },
    { id: 16, name: "Highlighter Stick", imageUrl: `${process.env.PUBLIC_URL}/Images/High.jpg` },
    { id: 17, name: "Setting Spray", imageUrl: `${process.env.PUBLIC_URL}/Images/Setting.jpg` },
    { id: 18, name: "Mascara", imageUrl: `${process.env.PUBLIC_URL}/Images/Masc.jpg` },
    { id: 19, name: "Nourishing Lip Balm", imageUrl: `${process.env.PUBLIC_URL}/Images/Balm.jpg` },
    { id: 20, name: "Clay Face Mask", imageUrl: `${process.env.PUBLIC_URL}/Images/Clay.jpg` },
  ];



  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Fair</Option>
            <Option>Light</Option>
            <Option>Medium - Light</Option>
            <Option>Medium - Dark</Option>
            <Option>Dark</Option>
            <Option>Ebony</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductsContainer>
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductItem>
              <ProductImage src={product.imageUrl} alt={product.name} />
              <div>{product.name}</div>
            </ProductItem>
          </Link>
        ))}
      </ProductsContainer>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
