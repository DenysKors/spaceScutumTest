import { createSlice } from "@reduxjs/toolkit";
import { filterStatus } from "../../constants/statusFilter";

const filterInitialState = {
	status: filterStatus.all,
};

const filterSlice = createSlice({
	name: "filter",
	initialState: filterInitialState,
	reducers: {
		setFilterStatus(state, action) {
			state.status = action.payload;
		},
	},
});

export const { setFilterStatus } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
