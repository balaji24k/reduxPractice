import { createStore } from "redux";

const counterReducer = (state = { counter: 0, toggle : false, name : "shanmukha" }, action) => {
  if (action.type === "add") {
    return {
			counter : state.counter + action.val,
			toggle : state.toggle,
			name : action.name
		}
  	}
	if (action.type === "toggle") {
		return {
			counter : state.counter,
			toggle : !state.toggle,
			name : state.name
		}
	}

	if (action.type === "remove") {
		return {
				counter : state.counter - action.val,
				toggle : state.toggle,
				name : action.name
			}
	}

	return state
};

const store = createStore(counterReducer);

export default store;


