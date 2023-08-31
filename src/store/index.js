import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/CartSlice';
import likedReducer from './reducers/LikedSlice';
import productReducer from './reducers/ProductSlice'

const rootReducer = combineReducers({
	cartReducer,
	likedReducer,
	productReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}