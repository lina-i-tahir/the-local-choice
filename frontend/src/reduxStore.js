import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Slices/apiSlice";

const reduxStore = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export default reduxStore