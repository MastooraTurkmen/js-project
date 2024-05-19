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
        const resp = await customFetch.get(url, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`
            }
        })
        console.log(resp.data);
        return resp.data
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue('There was an error')
    }
})

const allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    extraReducers: (builder) => {
        [getAllJobs.pending]: (state) => {
            state.isLoading = true;
        },
            [getAllJobs.fulfilled]: (state, { payload }) => {
                state.isLoading = false;
                state.jobs = payload.jobs
            },
                [getAllJobs.rejected]: (state, { payload }) => {
                    state.isLoading = false;
                    toast.error(payload)
                }
    }
});

export default allJobsSlice.reducer;