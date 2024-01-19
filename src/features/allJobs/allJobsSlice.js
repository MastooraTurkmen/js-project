import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

const initialFiltersState = {
    search: "",
    searchStatus: "all",
    searchType: "all",
    sort: "latest",
    sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
    isLoading: false,
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    ...initialFiltersState,
};

export const getAllJobs = createAsyncThunk('allJobs/getJobs', async (_, thunkAPI) => {
    let url = `/jobs`
    try {

    } catch (error) {
        console.log(error);
    }
})

const allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
});

export default allJobsSlice.reducer;