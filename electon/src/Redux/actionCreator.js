// action crators...................
import * as types from "./actionTypes"
export const productActionCreator = (data) => {
    return {
        type: types.PRODUCT_GET,
        payload: data
    }
}

export const updateCart = (payload) => {
    return {
        type : types.UPDATE_CART,
        payload : payload
    }
}

export const removeItem = (payload) => {
    return {
        type : types.REMOVE_ITEM,
        payload : payload
    }
}