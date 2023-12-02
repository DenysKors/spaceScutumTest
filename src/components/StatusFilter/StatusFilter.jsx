import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useSelector } from "react-redux";

import { selectFilterStatus } from "../../redux/todos/selectors";

export const StatusFilter = ({ onChangeFilter }) => {
	const filter = useSelector(selectFilterStatus);

	return (
		<ToggleButtonGroup
			size="small"
			color="primary"
			value={filter}
			exclusive
			onChange={onChangeFilter}
			aria-label="Filter todos"
		>
			<ToggleButton value="all">All</ToggleButton>
			<ToggleButton value="active">Active</ToggleButton>
			<ToggleButton value="completed">Completed</ToggleButton>
		</ToggleButtonGroup>
	);
};
