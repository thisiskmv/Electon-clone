import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://electon-server.onrender.com/products');
      setProducts(response.data);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
