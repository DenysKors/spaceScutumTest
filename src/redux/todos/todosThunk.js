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