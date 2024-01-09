
export const addUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const removeUserFromLocalStorage = (user) => {
    localStorage.removeItem('user');
}