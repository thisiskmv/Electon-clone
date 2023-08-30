import React, { useEffect, useState } from "react";
import { Box} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Skelton from "./Skelton";
import { thunkActionCreator } from "../../Redux/thunk";
import ProductItems from "./ProductItems";
import Error from "./Error";
import { Link } from 'react-router-dom';
// import Theme from "../Theme/Theme";
import Footer from "../Footer"

function Product(props) {
  const dispatch = useDispatch();
  const[toggle,setToggle]=useState(false)
  useEffect(() => {
    dispatch(thunkActionCreator("productData"));
  }, [toggle]);

  const filterData = (data) => {
    return dispatch(thunkActionCreator("filterData", data, null));
  };

  const limitData = (data) => {
    return dispatch(thunkActionCreator("productData", null, data));
  };

  const { product, isLoading, isError } = useSelector((store) => {
    return store;
  });
  console.log(product)
  console.log(isLoading);
  return (
    <>
    <Box  >
 
      {isLoading ? (
        <Skelton />
      ) : isError ? (
        <Error />
      ) : (
      
        <ProductItems
          product={product}
          filterData={filterData}
          limitData={limitData}
          toggle={toggle}
          setToggle={setToggle}
          id={product.id }
        />
        
        
      )}

    </Box>
   
    </>
  );
}

export default Product;
