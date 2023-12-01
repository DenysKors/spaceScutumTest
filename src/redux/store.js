import { configureStore } from "@reduxjs/toolkit";

import { todosReducer } from "./todos/todosSlice";
import { filterReducer } from "./todos/filterSlice";

const store = configureStore({
	reducer: {
		todos: todosReducer,
		filter: filterReducer,
	},
});

export default store;
