import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { clearAllJobsState } from '../allJobs/allJobsSlice';
import { clearValues } from '../job/jobSlice';
import { logoutUser } from './userSlice';
export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};


