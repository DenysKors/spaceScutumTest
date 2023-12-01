import { createSlice } from "@reduxjs/toolkit";

import { fetchAllTodos, completeTodo, deleteTodo } from "./todosThunk";

const todosInitialState = {
	allTodos: [],
	totalAmount: 0,
	isLoading: false,
};

const todosSlice = createSlice({
	name: "todos",
	initialState: todosInitialState,
	extraReducers: builder => {
		builder
			.addCase(fetchAllTodos.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchAllTodos.fulfilled, (state, { payload }) => {
				state.allTodos = payload.todos;
				state.totalAmount = payload.total;
				state.isLoading = false;
			})
			.addCase(fetchAllTodos.rejected, state => {
				state.allTodos = null;
				state.totalAmount = null;
				state.isLoading = false;
			})
			.addCase(completeTodo.fulfilled, (state, { payload }) => {
				const index = state.allTodos.findIndex(todo => todo.id === payload.id);
				state.allTodos.splice(index, 1, payload);
			})
			.addCase(deleteTodo.fulfilled, (state, { payload }) => {
				const index = state.allTodos.findIndex(todo => todo.id === payload.id);
				state.allTodos.splice(index, 1);
			});
	},
});

export const todosReducer = todosSlice.reducer;
