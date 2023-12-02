import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

import { pages } from "../../constants/pages";

function RespAppBar() {
	const navigate = useNavigate();

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar component="nav">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: { xs: "0.875rem", sm: "1.25rem" } }}>
						TodosApp
					</Typography>
					<Box>
						{pages.map(({ page, path }) => (
							<Button
								key={page}
								sx={{ color: "#fff", fontSize: { xs: "0.625rem", sm: "0.875rem" } }}
								onClick={() => navigate(`${path}`)}
							>
								{page}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default RespAppBar;
