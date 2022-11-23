const validateEmail = (email) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (email.length !== 0 && regex.test(email.toLowerCase())) {
        return true;
    } else {
        return false;
    }
};

export default validateEmail;