import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlice'
import cartReducer from './cartSlice'

/*import rootReducers from './rootReducer';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authenticationSlice } from './authenticationSlice';
*/
/**
 * To configure the store redux. 
 * 
 * @author Peter Mollet
 */
/*
 const initialState = {};
 const middleware = {thunk};
 export const store = createStore(
	rootReducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
*/

export const store = configureStore({
	reducer: {
		auth: authenticationReducer,
		cart: cartReducer,
	},
})
