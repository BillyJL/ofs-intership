import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	numberOfLiked: 0
}

export const likedSlice = createSlice({
	name: 'liked',
	initialState,
	reducers: {
		likedIncrement(state, action) {
			state.numberOfLiked += action.payload;
		}
	}
});

export default likedSlice.reducer;