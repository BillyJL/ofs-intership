import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/CartSlice';
import likedReducer from './reducers/LikedSlice';

const rootReducer = combineReducers({
	cartReducer,
	likedReducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}