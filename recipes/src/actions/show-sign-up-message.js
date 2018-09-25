export const showSignUpMessage = (message) => {
    return {
        type: 'SHOW_SIGN_UP_MESSAGE',
        payload : {
            signUpMessage : message
        }
    }
}