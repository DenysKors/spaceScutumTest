import { createSelector } from "@reduxjs/toolkit";

export const selectTodos = state => state.todos.allTodos;

export const selectTotalAmount = state => state.todos.totalAmount;

export const selectIsLoading = state => state.todos.isLoading;

export const selectFilterStatus = state => state.filter.status;

export const selectTodosCount = createSelector([selectTodos], allTodos => {
	return allTodos.reduce(
		(count, todo) => {
			if (todo.completed) {
				count.completed += 1;
			} else {
				count.active += 1;
			}
			return count;
		},
		{ active: 0, completed: 0 },
	);
});

export const selectVisibleTodos = createSelector([selectTodos, selectFilterStatus], (allTodos, filterStatus) => {
	if (filterStatus === "active") {
		return allTodos.filter(todo => !todo.completed);
	} else if (filterStatus === "completed") {
		return allTodos.filter(todo => todo.completed);
	} else {
		return allTodos;
	}
});
