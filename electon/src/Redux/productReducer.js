import * as types from "./actionTypes"

const initialState={
    product:[],
    isLoading:false,
    isError:false,
}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case types.LOADING:
            return{
                ...state,
                isLoading: true,
                isError: false
            }   
        case types.ERROR:
            return{
                ...state,
                isLoading: false,
                isError: true
            } 
        case types.PRODUCT_GET:
            return{
                ...state,
                isLoading: false,
                isError: false,
                product: action.payload
            }      

        default: return state    
    }
}