import { STORE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const storesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getStores: builder.query({
            query: () =>({
                url: STORE_URL,
            }),
            keepUnusedDataFor: 5
        }), 
        getStoreById: builder.query({
            query: (storeId) =>({
                url: `stores/${storeId}`,
            }),
            keepUnusedDataFor: 5
        }), 
        // payOrder: builder.mutation({
        //     query: (orderId, details) => ({
        //         url: `ORDERS_URL/${orderId}`,
        //         method: 'PUT',
        //         body: { ...details },
        //     }),
        // }), 
    })
})

export const { useGetStoresQuery, useGetStoreByIdQuery } = storesApiSlice