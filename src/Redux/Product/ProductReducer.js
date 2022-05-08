import { ADD_PRODUCT } from "./ProductAction";

const init = { products: [] };

export const ProductReducer = (store = init, { type, payload }) => {

  switch (type) {
    case ADD_PRODUCT:
      return { ...store, products: payload };

    default:
      return store;
  }
};
