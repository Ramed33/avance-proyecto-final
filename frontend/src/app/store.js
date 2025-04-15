import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../state/auth/authSlice"
import shoppingCartReducer from "../state/shoppingCart.slice"
import shoppingProductsReducer from "../state/shoppingProducts.slice"

export const rootReducer = {
    auth: authReducer,
    cart: shoppingCartReducer,
    products: shoppingProductsReducer,
};

export const store = configureStore({
    reducer: rootReducer,
});