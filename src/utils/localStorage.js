
export const addUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}