import { legacy_createStore as createStore, combineReducers } from "redux"
import { ProductReducer } from "./Product/ProductReducer";


const rootReducers = combineReducers({
    products: ProductReducer
})

export const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//createStore for me store whith this reducer
console.log("initial products", store.getState())
