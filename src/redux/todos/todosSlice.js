import { createSlice } from "@reduxjs/toolkit";

import { fetchAllTodos, completeTodo, deleteTodo, addTodo } from "./todosThunk";

const todosInitialState = {
	allTodos: [],
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
				state.isLoading = false;
			})
			.addCase(fetchAllTodos.rejected, state => {
				state.allTodos = null;
				state.isLoading = false;
			})
			.addCase(completeTodo.fulfilled, (state, { payload }) => {
				const index = state.allTodos.findIndex(todo => todo.id === payload.id);
				state.allTodos.splice(index, 1, payload);
			})
			.addCase(addTodo.fulfilled, (state, { payload }) => {
				state.allTodos.push(payload);
			})
			.addCase(deleteTodo.fulfilled, (state, { payload }) => {
				const index = state.allTodos.findIndex(todo => todo.id === payload.id);
				state.allTodos.splice(index, 1);
			});
	},
});

export const todosReducer = todosSlice.reducer;
