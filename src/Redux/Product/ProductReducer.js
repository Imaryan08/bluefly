import { ADD_PRODUCT } from "./ProductAction";

const init = { products: [] };

//{type,payload} =action
export const ProductReducer = (store = init, { type, payload }) => {
  // console.log(store, "pay")
  switch (type) {
    case ADD_PRODUCT:
      return {...store, products: payload };

    default:
      return store;
  }
};
