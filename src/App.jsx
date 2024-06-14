import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import BlogPage from './pages/BlogPage';
import ImageSlider from './pages/ImageSlider';
import PaintPage from './pages/PaintPage'; // Import PaintPage
import Art from './pages/Art'; // Import Art page

function App() {
  // Loader state
  const [isLoading, setIsLoading] = useState(true);

  // Create async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  return (
    isLoading ? (
      <Loader />
    ) : (
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
          <Route path="/paint" element={<PaintPage />} /> {/* Route for PaintPage */}
          <Route path="/art" element={<Art />} /> {/* Route for Art page */}
        </Routes>
      </HashRouter>
    )
  );
}

export default App;
