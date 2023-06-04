import * as types from "./actionTypes"


const initialState = {
    product: [],
    isLoading: false,
    isError: false,
    cart: [
        {
            id: '1',
            price: 39.99,
            currency: 'USD',
            name: "Canon EOS 3000D DSLR",
            color: "Black",
            size: "Medium",
            quantity: 3,
            imageUrl:
                "https://rukminim1.flixcart.com/image/416/416/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70",
        },
        {
            id: '2',
            price: 39.99,
            currency: 'USD',
            name: "boAt Rockerz 450 Pro",
            color: "Black",
            size: "Medium",
            description: 'Tan, 40mm',
            quantity: 3,
            imageUrl:
                "https://rukminim1.flixcart.com/image/416/416/kmccosw0/headphone/u/g/s/rockerz-450-pro-boat-original-imagf9j54dayugqg.jpeg?q=70",
        },
        {
            id: '3',
            price: 39.99,
            currency: 'USD',
            name: "Latest Video Game",
            color: "Black",
            size: "Medium",
            description: 'Tan, 40mm',
            quantity: 3,
            imageUrl:
                "https://rukminim1.flixcart.com/image/416/416/kq18n0w0/code-in-the-box-game/4/m/l/pc-4k-ultra-hd-gaming-controller-with-game-stick-tv-video-game-original-imag453as3haqcsy.jpeg?q=70",
        },
    ],
    total: 359.91
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PRODUCT_GET:
            return {
                product: action.payload
            }
        case types.LOADING:
            return {

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