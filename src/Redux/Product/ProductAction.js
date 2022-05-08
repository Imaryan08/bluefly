export const ADD_PRODUCT = "ADD_PRODUCT";

// to avoid spelling mistake we store it in the variable.
export  const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data
    };
}
