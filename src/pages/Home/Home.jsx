import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { useSelector } from "react-redux";
import { selectTodos, selectTodosCount, selectIsLoading } from "../../redux/todos/selectors";

function Home() {
	const { active } = useSelector(selectTodosCount);
	const totalTodos = useSelector(selectTodos);
	const isLoading = useSelector(selectIsLoading);

	return (
		<>
			<Toolbar />
			<Box component="main" sx={{ p: 3 }}>
				<Box component="section" sx={{ pb: 3 }}>
					<Typography align="center" variant="h3">
						Welcome to TodosApp!
					</Typography>
				</Box>
				{isLoading ? (
					<CircularProgress />
				) : (
					<Box component="section">
						<Typography
							align="center"
							variant="subtitle1"
							sx={{ mb: 3 }}
						>{`Your total amoun of todos is ${totalTodos.length}`}</Typography>
						<Typography
							align="center"
							variant="subtitle1"
						>{`Now you have ${active} active todos, so lets complete them all !`}</Typography>
					</Box>
				)}
			</Box>
		</>
	);
}

export default Home;
