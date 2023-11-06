import axios from 'axios';
import { clearStore } from '../features/user/userSlice';
import { getUserFromLocalStorage } from './localStorage';

const customFetch = axios.create({
  baseURL: 'https://redux-toolkit-jobster-api-server.onrender.com/api/v1',
});



export default customFetch;
