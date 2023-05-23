// action crators...................
import * as types from "./actionTypes"
export const productActionCreator=(data)=>{
    return{
        type:types.PRODUCT_GET,
        payload:data
    }
}