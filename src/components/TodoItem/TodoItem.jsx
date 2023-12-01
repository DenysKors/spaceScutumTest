import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "react-redux";

import { completeTodo } from "../../redux/todos/todosThunk";

export const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	const handleToggle = () => dispatch(completeTodo(todo.id));

	return (
		<ListItem
			secondaryAction={
				<IconButton edge="end" aria-label="delete">
					<DeleteIcon />
				</IconButton>
			}
			disablePadding
			divider={true}
		>
			<Checkbox edge="start" checked={todo.completed} disabled={todo.completed} disableRipple onChange={handleToggle} />

			<ListItemText primary={todo.todo} />
		</ListItem>
	);
};
