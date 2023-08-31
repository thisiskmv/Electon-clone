import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import "./LoadMoreComp.css"
import { Button } from '@mui/material';
import {AiOutlineArrowRight,AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const LoadMoreComp = () => {
  const [productData, setProductData] = useState([]);
  const boxRef = useRef(null);

  useEffect(() => {
    axios.get('https://electon-server.onrender.com/products')
      .then((res) => setProductData(res.data))
      .catch((error) => {
        console.error(error);
        // Handle the error here (e.g. show an error message to the user)
      });
  }, []);

  const handlePrevBtn = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
    console.log(width);
  };

  const handleNextBtn = () => {
    let width = boxRef.current.clientWidth;
    boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
    console.log(width);
  };

  return (
    <div className='product-carousel'>
      <button className='pre-btn' onClick={handlePrevBtn}><p><AiOutlineArrowLeft /></p></button>
      <button className='next-btn' onClick={handleNextBtn}><p><AiOutlineArrowRight /></p></button>

      <div className='product-card' ref={boxRef}>
        {
          productData.map((item, index) => {
            return (
              <div className='myCard' key={index}>
                <img src={item.image[0]} alt={item.name} />
                <h2>{item.name.substring(0, 10)}</h2>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <Link to={`/product/${item.id}`} underline="none">
                    <Button>View Details</Button>
                  </Link>
                  <Link to={`/product/${item.id}`} underline="none">
                  <Button>Buy Now</Button>
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LoadMoreComp;


