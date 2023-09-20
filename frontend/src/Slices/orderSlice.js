import { apiSlice } from "./apiSlice";
import { ORDERS_URL } from "../constants";

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) =>({
                url: ORDERS_URL,
                method: 'POST',
                body: {...order}
            })
        }), 
        payOrder: builder.mutation({
            query: (orderId, details) => ({
                url: `ORDERS_URL/${orderId}`,
                method: 'PUT',
                body: { ...details },
            }),
        }), 
    })
})

export const { useCreateOrderMutation, usePayOrderMutation } = ordersApiSlice