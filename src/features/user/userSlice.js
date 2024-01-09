import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "./utils/axios";

const initialState = {
    isLoading: false,
    user: null,
}

export const registerUser = createAsyncThunk('user/registerUser', async (user, thankAPI) => {
    try {
        const response = await customFetch.post('auth/testingRegister', user)
        console.log(response);
    } catch (error) {
        console.log(error.reponse);
    }
})

export const loginUser = createAsyncThunk('user/loginUser', async (user, thankAPI) => {
    console.log(`Login User : ${JSON.stringify(user)}`);
})

const userSlice = createSlice({
    name: 'user',
    initialState,
})

export default userSlice.reducer;