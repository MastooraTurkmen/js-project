import customFetch from "../../utils/axios";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user)
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg)
    }
}