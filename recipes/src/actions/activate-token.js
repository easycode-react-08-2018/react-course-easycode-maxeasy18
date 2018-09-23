export const activateToken = (userInfo) => {
    return {
        type: 'ACTIVATE_TOKEN',
        payload : {
            token : userInfo.token,
            userName : userInfo.userName
        }
    }
}