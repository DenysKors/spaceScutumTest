import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import { useSelector } from "react-redux";

import { TodoCounter } from "../../components/TodoCounter/TodoCounter";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { StatusFilter } from "../../components/StatusFilter/StatusFilter";
import { selectVisibleTodos } from "../../redux/todos/selectors";

function Todos() {
	const todos = useSelector(selectVisibleTodos);
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
					{todos?.length > 0 ? todos.map(todo => <TodoItem key={todo.id} todo={todo} />) : <p>Nothing found</p>}
				</List>
			</Container>
		</>
	);
}

export default Todos;
