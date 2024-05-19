import axios from "axios"
import { getUserFromLocalStorage } from "./localStorage"

const customFetch = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/vi/toolkit',
    // baseURL: 'https://redux-toolkit-jobster-api-server.onrender.com/api/v1',
})

customFetch.interceptors.request.use((confiq) => {
    const user = getUserFromLocalStorage()
    if (user) {
        confiq.headers.common['Authorization'] = `Bearer ${user.token}`;
    }
    return confiq
})

export default customFetch;