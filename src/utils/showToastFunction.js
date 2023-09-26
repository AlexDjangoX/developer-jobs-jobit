export const showToast = (type, title, message) => { return dispatch({
    type: "ADD_NOTIFICATION",
    payload: {id: uuidv4(), type, title, message}
})}