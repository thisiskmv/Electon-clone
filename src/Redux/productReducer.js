import * as types from "./actionTypes"


const initialState = {
    product: [],
    isLoading: false,
    isError: false,
    cart:
     [
       
    ],
    total: 0
}

// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case types.PRODUCT_GET:
//             return {
//                 product: action.payload
//             }
//         case types.LOADING:
//             return {

// const initialState={
//     product:[],
//     isLoading:false,
//     isError:false,
// }

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case types.LOADING:
            return{
                ...state,

                isLoading: true,
                isError: false
            }
        case types.ERROR:

            return {
                isLoading: false,
                isError: true
            }


        case types.UPDATE_CART: return {
            ...state,
            cart: action.payload.cart,
            total: action.payload.total
        }

        case types.REMOVE_ITEM: return {
            ...state,
            cart: action.payload.cart,
            total: action.payload.total
        }

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