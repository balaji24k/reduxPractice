import {configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import toggleSlice from "./TogglerSlice";

const store = configureStore({
	reducer : {
		count : counterSlice.reducer,
		toggle : toggleSlice.reducer
	}
});

export default store;


// const state = {counter : 0, toggle : false};

// const state = {count: {counter:0}, auth: {toggle : false}}


