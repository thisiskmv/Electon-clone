import axios from "axios"
import { productActionCreator,loadingActionCreator,errorActionCreator } from "./actionCreator";
export function thunkActionCreator(methodType,query,limit){
    return function(dispatch,getState){
        // write api call here

        const productData=(dispatch,limit=12)=>{
            dispatch(loadingActionCreator())
            axios
            .get(`https://electon-server.onrender.com/products?_limit=${limit}`)
            .then((res) => {
              console.log(res.data);
              dispatch(productActionCreator(res.data))
            }).catch(()=>{
                dispatch(errorActionCreator())
            })
        }
      
        const filterData=(dispatch,query)=>{
           if(query){
            axios
            .get(`https://electon-server.onrender.com/products?category=${query}`)
            .then((res) => {
              console.log("kmv",res.data);
              dispatch(productActionCreator(res.data))
            });
           }else{
            axios
            .get(`https://electon-server.onrender.com/products?_limit=12`)
            .then((res) => {
              console.log(res.data);
              dispatch(productActionCreator(res.data))
            }).catch(()=>{
                dispatch(errorActionCreator())
            })
           }
        }
        
        if(methodType==="productData"){
            productData(dispatch,limit)
        }else if(methodType==="filterData"){
            filterData(dispatch,query)
        }
    }
}