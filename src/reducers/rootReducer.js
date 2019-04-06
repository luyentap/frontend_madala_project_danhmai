import {combineReducers} from 'redux'
import { } from "./productReducer";
import {productReducer} from "./productReducer";

export const rootReducer = combineReducers({
  products: productReducer
})

