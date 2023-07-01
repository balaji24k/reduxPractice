import { createSlice } from "@reduxjs/toolkit"

const toggleSlice = createSlice({
	name : "toggle",
	initialState : {toggle : false},
	reducers : {
		togglerHandle (state) {
			state.toggle = !state.toggle
		}
	}
})

export const togglerActions = toggleSlice.actions;

export default toggleSlice;