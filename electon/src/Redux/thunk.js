import axios from "axios"
import { productActionCreator } from "./actionCreator";
export function thunkActionCreator(methodType){
    return function(dispatch,getState){
        // write api call here

        const productData=(dispatch)=>{
            axios
            .get("https://electon-server.onrender.com/products")
            .then((res) => {
              console.log(res.data);
              dispatch(productActionCreator(res.data))
            });
        }

        if(methodType==="productData"){
            productData(dispatch)
        }
    }
}