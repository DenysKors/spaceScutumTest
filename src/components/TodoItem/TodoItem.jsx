import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "react-redux";

import { completeTodo } from "../../redux/todos/todosThunk";

export const TodoItem = ({ todo, onDelete }) => {
	const dispatch = useDispatch();

	const handleComplete = () => dispatch(completeTodo(todo.id));

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
				<IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)}>
					<DeleteIcon />
				</IconButton>
			)}
		</ListItem>
	);
};
