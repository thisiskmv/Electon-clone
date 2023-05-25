import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./LoadMoreComp.css"
import { Button } from '@mui/material';
const LoadMoreComp = () => {
    const[productData,setProductData]=useState([])
    useEffect(()=>{
          axios.get('https://electon-server.onrender.com/products')
          .then((res)=>setProductData(res.data))
    },[])
    console.log(productData)
    let box = document.querySelector(".product-card")
    const handlePrevBtn=()=>{
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft-width
        console.log(width)
    }
    const handleNextBtn=()=>{
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft+width
        console.log(width)
    }
  return (
    <div className='product-carousel'>
         <button className='pre-btn' onClick={handlePrevBtn}><p>&lt;</p></button>
         <button className='next-btn' onClick={handleNextBtn}><p>&gt;</p></button>

         <div className='product-card'>
             {
                productData.map((item,index)=>{
                    return(
                        <div className='myCard'>
                            <img src={item.image[0]}/>
                            <h2>{item.name.substring(0, 10)}</h2>
                            <div style={{display:"flex",justifyContent:"space-around"}}>
                            <Button>View Details</Button>
                            <Button>Buy Now</Button>
                            </div>
                        </div>
                    )
                })
             }
         </div>
    </div>
  )
}

export default LoadMoreComp
