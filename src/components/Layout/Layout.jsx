import { Outlet } from "react-router-dom";

import RespAppBar from "../AppBar/AppBar";

function Layout() {
	return (
		<>
			<RespAppBar />
			<Outlet />
		</>
	);
}

export default Layout;
