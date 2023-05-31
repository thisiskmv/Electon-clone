// action crators...................
import * as types from "./actionTypes"
export const productActionCreator=(data)=>{
    return{
        type:types.PRODUCT_GET,
        payload:data
    }
}

export const loadingActionCreator=()=>{
    return{
        type:types.LOADING
    }
}

export const errorActionCreator=()=>{
    return{
        type:types.ERROR
    }
}

