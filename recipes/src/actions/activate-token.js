export const activateToken = (token) => {
    return {
        type: 'ACTIVATE_TOKEN',
        payload : token
    }
}