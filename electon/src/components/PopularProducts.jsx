import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./PopularProducts.css"
import { Button } from "@chakra-ui/react"
const PopularProducts = () => {
   
    const[catArr,setCatArr]=useState([])
     
    const[productData,setProductData]=useState([])
    useEffect(()=>{
          axios.get('https://electon-server.onrender.com/products')
          .then((res)=>setProductData(res.data))

    },[])

   
    
        const filetrCategory=(value)=>{
            console.log(value)
             const filtArr=productData.filter((item)=>{
                console.log(value)
                return item.category===value
             })
            setCatArr(filtArr)
            console.log(catArr)
        }
        
            // filetrCategory(category);
        
       
   
  return (
    <div>
      <div className='popularProductHeading'>
           <h2>Popular Products</h2>
           <div className='categories'>
                 <Button value="camera" onClick={()=>filetrCategory("camera")}>Cameras</Button>
                 <Button value="laptop" onClick={()=>filetrCategory("laptop")}>Laptops</Button>
                 <Button value="tablet" onClick={()=>filetrCategory("tablet")}>Tablets</Button>
                 <Button value="mouse" onClick={()=>filetrCategory("mouse")}>Mouse</Button>
           </div>
      </div>
    </div>
  )
}

export default PopularProducts
