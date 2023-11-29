import { createSlice } from "@reduxjs/toolkit";

import { fetchAllTodos } from "./todosThunk";

const todosInitialState = {
	allTodos: null,
	totalAmount: null,
};

const todosSlice = createSlice({
	name: "todos",
	initialState: todosInitialState,
	extraReducers: builder => {
		builder.addCase(fetchAllTodos.fulfilled, (state, { payload }) => {
			state.allTodos = payload.todos;
			state.totalAmount = payload.total;
		});
	},
});

export const todosReducer = todosSlice.reducer;
