import * as types from "./actionTypes"

const initialState={
    product:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case types.PRODUCT_GET:
            return{
                product: action.payload
            }
        case types.LOADING:
            return{
                isLoading: true,
                isError: false
            }   
        case types.ERROR:
            return{
                isLoading: false,
                isError: true
            }     

        default: return state    
    }
}