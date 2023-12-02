import axios from "axios";
import toast from "react-hot-toast";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { BASE_URL } from "../../constants/apiConstants";

const instance = axios.create({
	baseURL: BASE_URL,
});

export const fetchAllTodos = createAsyncThunk("todos/fetchAll", async (_, thunkApi) => {
	try {
		const { data } = await instance.get("/todos?limit=0");
		return data;
	} catch (error) {
		console.log(error);
		toast.error("Connection failed, please try again");

		return thunkApi.rejectWithValue(error.message);
	}
});

export const completeTodo = createAsyncThunk("todos/completeTodo", async (todoId, thunkApi) => {
	try {
		const { data } = await instance.put(`/todos/${todoId}`, {
			completed: true,
		});
		toast.success("Congratulations! Todo completed!");
		return data;
	} catch (error) {
		console.log(error);
		toast.error("Connection failed, please try again");

		return thunkApi.rejectWithValue(error.message);
	}
});

export const addTodo = createAsyncThunk("todos/addTodo", async (todo, thunkApi) => {
	try {
		const { data } = await instance.post("/todos/add", todo);
		toast.success("New Todo added!");
		return data;
	} catch (error) {
		console.log(error);
		toast.error("Connection failed, please try again");

		return thunkApi.rejectWithValue(error.message);
	}
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (todoId, thunkApi) => {
	try {
		const { data } = await instance.delete(`/todos/${todoId}`);
		toast.success("Todo deleted!");
		return data;
	} catch (error) {
		console.log(error);
		toast.error("Connection failed, please try again");

		return thunkApi.rejectWithValue(error.message);
	}
});
