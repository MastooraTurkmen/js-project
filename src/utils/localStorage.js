export const addUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
};
