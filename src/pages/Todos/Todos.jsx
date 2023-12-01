import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Pagination from "@mui/material/Pagination";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { TodoCounter } from "../../components/TodoCounter/TodoCounter";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { StatusFilter } from "../../components/StatusFilter/StatusFilter";
import { selectVisibleTodos } from "../../redux/todos/selectors";

const todosPerPage = 10;

function Todos() {
	const [page, setPage] = useState(1);
	const [item, setItem] = useState(0);
	const [currentTodos, setCurrentTodos] = useState([]);

	const todos = useSelector(selectVisibleTodos);

	const amountOfPages = Math.ceil(todos.length / todosPerPage);

	useEffect(() => {
		const endOffset = item + todosPerPage;
		const paginationItems = todos.slice(item, endOffset);
		setCurrentTodos(paginationItems);
	}, [todos, item]);

	const handleChange = (_, value) => {
		setPage(value);
		setItem(value * todosPerPage - todosPerPage);
	};

	return (
		<>
			<Toolbar />
			<Container component="main" maxWidth="lg" sx={{ p: 3 }}>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						alignItems: "flex-end",
						justifyContent: { xs: "space-around", sm: "space-between" },
					}}
				>
					<TodoCounter />
					<StatusFilter />
				</Box>
				<List>
					{todos?.length > 0 ? currentTodos.map(todo => <TodoItem key={todo.id} todo={todo} />) : <p>Nothing found</p>}
				</List>
				{todos?.length > 0 && (
					<Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
						<Pagination count={amountOfPages} page={page} onChange={handleChange} variant="outlined" color="primary" />
					</Box>
				)}
			</Container>
		</>
	);
}

export default Todos;
