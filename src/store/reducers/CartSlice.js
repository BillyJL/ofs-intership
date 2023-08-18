import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	numberOfProducts: 0
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		numOfProductIncrement(state, action) {
			state.numberOfProducts += action.payload;
		}
	}
});

export default cartSlice.reducer;