import { createSelector } from "@reduxjs/toolkit";

export const selectTodos = state => state.todos.allTodos;

export const selectTotalAmount = state => state.todos.totalAmount;

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
