import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

import { selectTotalAmount, selectTodosCount } from "../../redux/todos/selectors";

export const TodoCounter = () => {
	const { active, completed } = useSelector(selectTodosCount);
	const totalTodos = useSelector(selectTotalAmount);

	return (
		<Box component="div">
			<Typography>Active: {active}</Typography>
			<Typography>Completed: {completed}</Typography>
			<Typography>Total: {totalTodos}</Typography>
		</Box>
	);
};
