const emailValidator = (email) => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
}

const passwordValidator = (password) => {
    if (password.length <= 5) {
        return false;
    };

    if (password.length >= 100) {
        return false;
    };

    return true;
}

export {
    emailValidator,
    passwordValidator
}