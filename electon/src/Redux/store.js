import {legacy_createStore as createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { themeReducer } from "./theme/themeReducer"
import {reducer} from "./productReducer"
const combineReducer = combineReducers({
    reducer,themeReducer
})
const  store=createStore(combineReducer,applyMiddleware(thunk))
export default store