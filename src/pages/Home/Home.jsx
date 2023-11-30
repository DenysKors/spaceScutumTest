import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";
import { selectTotalAmount, selectTodosCount } from "../../redux/todos/selectors";

function Home() {
	const { active } = useSelector(selectTodosCount);
	const totalTodos = useSelector(selectTotalAmount);
	return (
		<>
			<Toolbar />
			<Box component="main" sx={{ p: 3 }}>
				<Box component="section" sx={{ pb: 3 }}>
					<Typography align="center" variant="h3">
						Welcome to TodosApp!
					</Typography>
				</Box>
				<Box component="section">
					<Typography
						align="center"
						variant="subtitle1"
						sx={{ mb: 3 }}
					>{`Your total amoun of todos is ${totalTodos}.`}</Typography>
					<Typography
						align="center"
						variant="subtitle1"
					>{`Now you have ${active} active todos, so lets complete them all !`}</Typography>
				</Box>
			</Box>
		</>
	);
}

export default Home;
