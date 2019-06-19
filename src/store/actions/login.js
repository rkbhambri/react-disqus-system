import * as actionTypes from './actionTypes';

export const login = (email, password) => {
    if (email === 'ram@gmail.com' && password === 'Ram@123') {
        return loginSuccess();
    } else {
        return loginFail();
    }
};

export const loginSuccess = () => ({
    type: actionTypes.LOGIN_SUCCESS
});

export const loginFail = () => ({
    type: actionTypes.LOGIN_FAIL
});

export const logout = () => ({
    type: actionTypes.LOGOUT
});

export const resetLoginFailFlag = () => ({
    type: actionTypes.RESET_LOGIN_FAIL_FLAG
})
