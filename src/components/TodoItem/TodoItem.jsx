import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "react-redux";

import { completeTodo, deleteTodo } from "../../redux/todos/todosThunk";

export const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	const handleComplete = () => dispatch(completeTodo(todo.id));

	const handleDelete = () => dispatch(deleteTodo(todo.id));

	return (
		<ListItem disablePadding divider={true}>
			<Checkbox
				edge="start"
				checked={todo.completed}
				disabled={todo.completed}
				disableRipple
				onChange={handleComplete}
			/>

			<ListItemText primary={todo.todo} />
			{!todo.completed && (
				<IconButton edge="end" aria-label="delete" onClick={handleDelete}>
					<DeleteIcon />
				</IconButton>
			)}
		</ListItem>
	);
};
