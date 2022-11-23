import { combineReducers} from "redux";
import { authenticationSlice } from './authenticationSlice';
import { cartSlice } from './cartSlice';


/**
 * Combine all the reducers create in different files, to add them in the redux-store
 * So, if you create a new reducer, it needs to be added here
 * 
 * @author Peter Mollet
 */
export default combineReducers({
    authenticationSlice,
    cartSlice
})
/*
import { productReducer } from "./ProductReducer";
export const reducers = combineReducers({
    allProducts: productReducer,
})

import { createStore } from 'redux';
import { reducers } from './rootReducer';
import { cartSlice } from './cartSlice';
export const Store = createStore(reducers,{},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
*/