import { createSlice } from "@reduxjs/toolkit";

import { fetchAllTodos, completeTodo } from "./todosThunk";

const todosInitialState = {
	allTodos: [],
	totalAmount: 0,
};

const todosSlice = createSlice({
	name: "todos",
	initialState: todosInitialState,
	extraReducers: builder => {
		builder
			.addCase(fetchAllTodos.fulfilled, (state, { payload }) => {
				state.allTodos = payload.todos;
				state.totalAmount = payload.total;
			})
			.addCase(fetchAllTodos.rejected, state => {
				state.allTodos = null;
				state.totalAmount = null;
			})
			.addCase(completeTodo.fulfilled, (state, { payload }) => {
				const index = state.allTodos.findIndex(todo => todo.id === payload.id);
				state.allTodos.splice(index, 1, payload);
			});
	},
});

export const todosReducer = todosSlice.reducer;
