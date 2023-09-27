import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Slices/apiSlice";
import cartSliceReducer from "./Slices/cartSlice";
import sortingSliceReducer from "./Slices/sortingSlice";
import allStoresSliceReducer from "./Slices/allStoresSlice";

const reduxStore = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSliceReducer,
        sorting: sortingSliceReducer,
        stores: allStoresSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export default reduxStore