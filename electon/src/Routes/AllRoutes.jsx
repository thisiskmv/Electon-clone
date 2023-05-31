import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from '../Component/ProductPage';
import ProductDetailPage from '../Pages/ProductDetailPage';

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductPage/>} />
        <Route path="/product/:id" element={<ProductDetailPage/>} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
