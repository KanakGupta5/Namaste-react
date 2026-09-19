import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./pokemonApi";
import cartReducer from './cartSlice';

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware)
});

export default appStore;