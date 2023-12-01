import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useSelector, useDispatch } from "react-redux";

import { selectFilterStatus } from "../../redux/todos/selectors";
import { setFilterStatus } from "../../redux/todos/filterSlice";

export const StatusFilter = () => {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilterStatus);

	const handleChange = (_, newfilter) => dispatch(setFilterStatus(newfilter));

	return (
		<ToggleButtonGroup
			size="small"
			color="primary"
			value={filter}
			exclusive
			onChange={handleChange}
			aria-label="Filter todos"
		>
			<ToggleButton value="all">All</ToggleButton>
			<ToggleButton value="active">Active</ToggleButton>
			<ToggleButton value="completed">Completed</ToggleButton>
		</ToggleButtonGroup>
	);
};
