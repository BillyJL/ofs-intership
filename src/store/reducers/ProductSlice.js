import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	showingOtherStuff: true
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		showingOtherToggle(state) {
			state.showingOtherStuff = !state.showingOtherStuff;
		}
	}
});

export default productSlice.reducer;