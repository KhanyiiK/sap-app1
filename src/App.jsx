import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import BlogPage from "./pages/BlogPage";
import ImageSlider from "./pages/ImageSlider";

const App = () => {
  return (
    <React.Fragment>
      <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/imageslider" element={<ImageSlider />} />
      </Routes>
    </HashRouter>
    </React.Fragment>
  );
};

export default App;
