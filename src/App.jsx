import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home/Home";
import Todos from "./pages/Todos/Todos";
import AddTodo from "./pages/AddTodo/AddTodo";
import Layout from "./components/Layout/Layout";

import { fetchAllTodos } from "./redux/todos/todosThunk";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllTodos());
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="todos" element={<Todos />} />
					<Route path="add-todo" element={<AddTodo />} />
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>

			<Toaster
				position="top-center"
				reverseOrder={false}
				toastOptions={{
					duration: 4000,
					style: {
						background: "#333",
						color: "#fff",
					},
				}}
			/>
		</>
	);
}

export default App;
