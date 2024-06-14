import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Remove, Add } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: pink;
  }
`;

const Product = ({ cart, addToCart }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1); // State to manage quantity

  // Replace with actual product data or fetch from an API
  const products = [
    {
      id: 1,
      name: "Vitamin C Serum",
      imageUrl: `${process.env.PUBLIC_URL}/Images/VitC.jpg`,
      price: 20,
      description:
        "A powerful serum enriched with Vitamin C to brighten and firm the skin. Helps reduce the appearance of dark spots and evens out skin tone.",
      sizeOptions: ["S", "M", "L"],
      percentages: ["5%", "10%", "15%"], // Example percentages
    },
    {
      id: 2,
      name: "Hyaluronic Acid Serum",
      imageUrl: `${process.env.PUBLIC_URL}/Images/HyA.jpg`,
      price: 25,
      description:
        "Deeply hydrating serum infused with Hyaluronic Acid to plump and moisturize the skin. Helps smooth fine lines and wrinkles for a more youthful appearance.",
      sizeOptions: ["XS", "S", "M", "L", "XL"],
      percentages: ["1%", "2%", "3%"], // Example percentages
    },
    {
      id: 3,
      name: "Retinol Serum",
      imageUrl: `${process.env.PUBLIC_URL}/Images/Ret.jpg`,
      price: 30,
      description:
        "Advanced anti-aging serum containing Retinol to promote skin renewal and reduce the signs of aging. Helps improve skin texture and minimize pores.",
      sizeOptions: ["S", "M", "L", "XL"],
      percentages: ["0.5%", "1%", "2%"], // Example percentages
    },
    {
      id: 4,
      name: "Combo Serum",
      imageUrl: `${process.env.PUBLIC_URL}/Images/ComboS.jpg`,
      price: 20,
      description:
        "An all-in-one serum combining multiple active ingredients to address various skin concerns. Provides hydration, brightening, and anti-aging benefits.",
      sizeOptions: ["S", "M", "L"],
      percentages: ["5%", "10%", "15%"], // Example percentages
    },
    {
      id: 5,
      name: "Female Serum",
      imageUrl: `${process.env.PUBLIC_URL}/Images/FemS.jpg`,
      price: 25,
      description:
        "Specially formulated serum designed for female skin, enriched with botanical extracts and antioxidants. Enhances skin radiance and vitality.",
      sizeOptions: ["XS", "S", "M", "L", "XL"],
      percentages: ["1%", "2%", "3%"], // Example percentages
    },
    {
      id: 6,
      name: "Youthful Glow Serum",
      imageUrl: `${process.env.PUBLIC_URL}/Images/GlowS.jpg`,
      price: 30,
      description:
        "Revitalizing serum infused with essential nutrients and peptides to restore youthful glow. Firms and smooths skin texture for a radiant complexion.",
      sizeOptions: ["S", "M", "L", "XL"],
      percentages: ["0.5%", "1%", "2%"], // Example percentages
    },
  {
    id: 7,
    name: "Hydrating Facial Cleanser",
    imageUrl: `${process.env.PUBLIC_URL}/Images/Cleanser.jpg`,
    price: 35,
    description:
      "A gentle cleanser that effectively removes dirt, oil, and makeup without stripping the skin. Infused with hydrating ingredients to leave skin feeling clean and refreshed.",
    sizeOptions: ["S", "M", "L"],
  },
  {
    id: 8,
    name: "Moisturizing Night Cream",
    imageUrl: `${process.env.PUBLIC_URL}/Images/NightCream.jpg`,
    price: 40,
    description:
      "An intensive night cream that deeply hydrates and nourishes the skin while you sleep. Helps improve skin elasticity and reduce the appearance of fine lines and wrinkles.",
    sizeOptions: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "Brightening Vitamin C Cream",
    imageUrl: `${process.env.PUBLIC_URL}/Images/VitCream.jpg`,
    price: 45,
    description:
      "A potent serum enriched with Vitamin C to brighten and even out skin tone. Helps diminish dark spots, discoloration, and signs of aging for a more radiant complexion.",
    sizeOptions: ["S", "M", "L", "XL"],
  },
  {
    id: 10,
    name: "Anti-Aging Eye Cream",
    imageUrl: `${process.env.PUBLIC_URL}/Images/EyeC.jpg`,
    price: 50,
    description:
      "A luxurious eye cream that targets fine lines, puffiness, and dark circles around the delicate eye area. Formulated with peptides and antioxidants to rejuvenate and firm the skin.",
    sizeOptions: ["S", "M", "L"],
  },
  {
    id: 11,
    name: "Exfoliating Facial Scrub",
    imageUrl: `${process.env.PUBLIC_URL}/Images/Scrub.jpg`,
    price: 55,
    description:
      "Gentle yet effective facial scrub that buffs away dead skin cells, leaving skin smooth and radiant. Enriched with natural exfoliants and botanical extracts to reveal a brighter complexion.",
    sizeOptions: ["S", "M", "L", "XL"],
  },
  {
    id: 12,
    name: "Hydrating Sheet Mask",
    imageUrl: `${process.env.PUBLIC_URL}/Images/Mask.jpg`,
    price: 60,
    description:
      "Revitalizing sheet mask soaked in hydrating serum to instantly replenish moisture and revive tired-looking skin. Provides a cooling sensation and leaves skin feeling soft and supple.",
    sizeOptions: ["S", "M", "L", "XL"],
  },

  {
    id: 13,
    name: "Matte Lipstick",
    imageUrl: `${process.env.PUBLIC_URL}/Images/Lips.jpg`,
    price: 25,
    description:
      "A richly pigmented matte lipstick that delivers intense color with a velvety smooth finish. Long-lasting formula stays put without drying out lips.",
    sizeOptions: ["S", "M", "L"],
  },
  {
    id: 14,
    name: "Liquid Foundation",
    imageUrl: `${process.env.PUBLIC_URL}/Images/Found.jpg`,
    price: 30,
    description:
      "Lightweight liquid foundation that provides seamless coverage and a natural-looking matte finish. Formulated to blur imperfections and even out skin tone.",
    sizeOptions: ["S", "M", "L", "XL"],
  },
  {
    id: 15,
    name: "Eyeshadow Palette",
    imageUrl: `${process.env.PUBLIC_URL}/Images/Shadow.jpg`,
    price: 35,
    description:
      "Versatile eyeshadow palette featuring a range of shades from neutrals to bold colors. Highly pigmented and blendable formula allows for endless eye looks.",
    sizeOptions: ["S", "M", "L", "XL"],
  },
  {
    id: 16,
    name: "Highlighter Stick",
    imageUrl: `${process.env.PUBLIC_URL}/Images/High.jpg`,
    price: 40,
    description:
      "Creamy highlighter stick that adds a luminous glow to the high points of the face. Buildable formula blends seamlessly for a radiant complexion.",
    sizeOptions: ["S", "M", "L"],
  },
  {
    id: 17,
    name: "Setting Spray",
    imageUrl: `${process.env.PUBLIC_URL}/Images/Setting.jpg`,
    price: 45,
    description:
      "Refreshing setting spray that locks in makeup for extended wear and a fresh, dewy finish. Infused with botanical extracts to hydrate and soothe the skin.",
    sizeOptions: ["S", "M", "L", "XL"],
  },
  {
    id: 18,
    name: "Mascara",
    imageUrl: `${process.env.PUBLIC_URL}/Images/Masc.jpg`,
    price: 50,
    description:
      "Lengthening and volumizing mascara that lifts and defines lashes for a dramatic eye look. Smudge-proof formula stays put throughout the day.",
    sizeOptions: ["S", "M", "L", "XL"],
  },
  {
    id: 19,
    name: "Nourishing Lip Balm",
    imageUrl: `${process.env.PUBLIC_URL}/Images/Balm.jpg`,
    price: 15,
    description:
      "A hydrating lip balm that soothes and nourishes dry, chapped lips. Enriched with natural oils and butters to keep lips soft and smooth.",
    sizeOptions: ["S", "M"],
  },
  {
    id: 20,
    name: "Clay Face Mask",
    imageUrl: `${process.env.PUBLIC_URL}/Images/Clay.jpg`,
    price: 20,
    description:
      "A detoxifying clay mask that purifies and refines the skin. Helps remove impurities and excess oil, leaving the skin fresh and clear.",
    sizeOptions: ["S", "M", "L"],
  },
];

const product = products.find((p) => p.id === parseInt(id));

if (!product) {
  return <div>Product not found</div>;
}

const addToCartHandler = () => {
  const cartItem = { ...product, quantity }; // Include quantity in the cart item
  addToCart(cartItem);
};

return (
  <Container>
    <Navbar />
    <Announcement />
    <Wrapper>
      <ImgContainer>
        <Image src={product.imageUrl} alt={product.name} />
      </ImgContainer>
      <InfoContainer>
        <Title>{product.name}</Title>
        <Desc>{product.description}</Desc>
        <Price>${product.price}</Price>
        <FilterContainer>
          {product.colorOptions && (
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.colorOptions.map((color, index) => (
                <FilterColor key={index} color={color} />
              ))}
            </Filter>
          )}
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              {product.sizeOptions.map((size, index) => (
                <FilterSizeOption key={index}>{size}</FilterSizeOption>
              ))}
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmountContainer>
            <Remove onClick={() => setQuantity(Math.max(1, quantity - 1))} />
            <Amount>{quantity}</Amount>
            <Add onClick={() => setQuantity(quantity + 1)} />
          </AmountContainer>
          <Button onClick={addToCartHandler}>ADD TO CART</Button>
        </AddContainer>
      </InfoContainer>
    </Wrapper>
    <Newsletter />
    <Footer />
  </Container>
);
};

export default Product;
