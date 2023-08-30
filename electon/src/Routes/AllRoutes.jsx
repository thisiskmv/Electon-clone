import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductPage from '../Component/ProductPage';
import ProductDetailPage from '../Pages/ProductDetailPage';
import Product from '../Component/pages/Product';
import { ChakraProvider } from '@chakra-ui/react';
import Home from '../Component/Home';
import Cart from '../Component/pages/Cart';
import Payment from '../Component/pages/Payment';
import Header from '../Component/Header';
const AllRoutes = () => {
  return (
    <Router>
      <Routes>

        <Route exact path="/" element={

          <Home />
        } />

        <Route exact path="/productPage" element={
          <ChakraProvider>
            <Product />
          </ChakraProvider>
        } />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={
          <ChakraProvider>
            <Cart />
          </ChakraProvider>
        } />
        <Route path="/checkout" element={
          <ChakraProvider>
            <Payment />
          </ChakraProvider>
        } />


      </Routes>
    </Router>
  );
};

export default AllRoutes;
