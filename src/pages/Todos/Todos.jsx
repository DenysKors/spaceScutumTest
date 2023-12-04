import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import Confetti from "react-confetti";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";

import { TodoCounter } from "../../components/TodoCounter/TodoCounter";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { StatusFilter } from "../../components/StatusFilter/StatusFilter";
import { selectVisibleTodos, selectIsLoading } from "../../redux/todos/selectors";
import { deleteTodo, completeTodo } from "../../redux/todos/todosThunk";
import { setFilterStatus } from "../../redux/todos/filterSlice";

const todosPerPage = 10;
const CONFETTI_DURATION = 2500;

function Todos() {
	const [page, setPage] = useState(1);
	const [item, setItem] = useState(0);
	const [isConfetti, setIsConfetti] = useState(false);
	const [currentTodos, setCurrentTodos] = useState([]);
	const timeoutId = useRef(null);

	const dispatch = useDispatch();
	const todos = useSelector(selectVisibleTodos);
	const isLoading = useSelector(selectIsLoading);

	const amountOfPages = Math.ceil(todos.length / todosPerPage);

	useEffect(() => {
		const endOffset = item + todosPerPage;
		const paginationItems = todos.slice(item, endOffset);
		setCurrentTodos(paginationItems);
	}, [todos, item]);

	useEffect(() => {
		if (isConfetti) {
			timeoutId.current = setTimeout(() => {
				setIsConfetti(false);
			}, CONFETTI_DURATION);
		}

		return () => {
			if (timeoutId.current) {
				clearTimeout(timeoutId.current);
			}
		};
	}, [isConfetti]);

	const handleChangePage = (_, value) => {
		setPage(value);
		setItem(value * todosPerPage - todosPerPage);
	};

	const handleChangeFilter = (_, newfilter) => {
		dispatch(setFilterStatus(newfilter));
		setPage(1);
		setItem(0);
	};

	const handleComplete = todoId => {
		setIsConfetti(true);
		if (currentTodos.length === 1 && todos.length > 1) {
			setItem(prevState => prevState - 10);
			setPage(prevState => prevState - 1);
		}
		dispatch(completeTodo(todoId));
	};

	const handleDelete = todoId => {
		if (currentTodos.length === 1 && todos.length > 1) {
			setItem(prevState => prevState - 10);
			setPage(prevState => prevState - 1);
		}
		dispatch(deleteTodo(todoId));
	};

	return (
		<>
			<Toolbar />
			{isConfetti && <Confetti run={true} recycle={false} gravity={0.3} tweenDuration={1000} />}
			<Container component="main" maxWidth="lg" sx={{ p: 3 }}>
				{isLoading ? (
					<CircularProgress />
				) : (
					<>
						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
								alignItems: "flex-end",
								justifyContent: { xs: "space-around", sm: "space-between" },
							}}
						>
							<TodoCounter />
							<StatusFilter onChangeFilter={handleChangeFilter} />
						</Box>
						<List>
							{todos?.length > 0 ? (
								currentTodos.map(todo => (
									<TodoItem key={todo.id} todo={todo} onDelete={handleDelete} onComplete={handleComplete} />
								))
							) : (
								<p>Nothing found</p>
							)}
						</List>
						{currentTodos.length > 0 && (
							<Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
								<Pagination
									count={amountOfPages}
									page={page}
									onChange={handleChangePage}
									variant="outlined"
									color="primary"
								/>
							</Box>
						)}
					</>
				)}
			</Container>
		</>
	);
}

export default Todos;
