import React, { useEffect, useState } from "react";
import { Box, Button} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Skelton from "./Skelton";
import { thunkActionCreator } from "../../Redux/thunk";
import ProductItems from "./ProductItems";
import Error from "./Error";
import "./theme.css"


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
    return store.reducer;
  });
  const { theme} = useSelector((store) => {
    return store.themeReducer;
  });
  console.log(theme)
  // console.log(isLoading); h="100"
  return (
    <Box minH="100vh" p="2.6rem"  className={theme==="light" ? "light_theme" : "dark_theme"}>
    <Box>
      
      <Button onClick={()=>{dispatch({type:"themeChange",payload:"light"})}}>Light</Button>
      <Button onClick={()=>{dispatch({type:"themeChange",payload:"dark"})}}>dark</Button>
 
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
        />
      )}
    </Box>
    </Box>
  );
}

export default Product;
