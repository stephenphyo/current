const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    if (password.length !== 0 && regex.test(password)) {
        return true;
    } else {
        return false;
    }
};

export default validatePassword;