import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { useCreateOrderMutation } from "../Slices/orderSlice"



const PlaceOrder = () => {

    const [createOrder, { isLoading, error }] = useCreateOrderMutation()
    const navigate = useNavigate()

    const cart = {
        orderItems: [
            {
                name: "rainbox earrings",
                qty: 2, 
                image : "https://www.handfully.com/cdn/shop/files/image_5cea19a2-deed-447f-a2e1-173cb451a075_1024x1024@2x.jpg?v=1686143498",
                price : 29.99,
            },
            {
                name: "stickers",
                qty: 10, 
                image : "https://images.squarespace-cdn.com/content/v1/561debf1e4b08aeed3fd59c8/1553280098798-XINLBD55FOWYEXW4I9I8/P1170291+copy.jpg?format=1500w",
                price : 5.99,
            },
            {
                name: "stud earrings",
                qty: 8, 
                image : "https://www.handfully.com/cdn/shop/files/image_5cea19a2-deed-447f-a2e1-173cb451a075_1024x1024@2x.jpg?v=1686143498",
                price : 10.99,
            }
        ],
        shippingAddress: {
            address: "Orchard Road",
            city: "Town",
            postalCode: "252432",
            country: "Singapore"
        }, 
        paymentMethod: "paypal",
        itemsPrice: 105.99,
        taxPrice: 5.99,
        shippingPrice: 5,
        totalPrice: 115.27,
    }

    const placeOrderHandler = async () => {
        try {
            const res = await createOrder({
                orderItems: cart.orderItems, 
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            }).unwrap()
            navigate(`/orders/${res._id}`)
        } catch (error) {
            toast.error(error)
        }
    }

  return (
    <>
        <div>
        <h1>PLACING ORDER</h1>
        <h3>Shipping</h3>
        <p> 
            Address: {cart.shippingAddress.address}
            <br/>
            City : {cart.shippingAddress.city}
            <br/>
            Postal Code : {cart.shippingAddress.postalCode}
            <br/>
            Country: {cart.shippingAddress.country}
        </p>

        <h3>Payment Method</h3>
        <p>{cart.paymentMethod}</p>

        <h3>Order Items</h3>
        {cart.orderItems.map((item, index) => (
            <>
            <img style= {{width: "150px"}} src={item.image}/>
            <p>{item.name}</p>
            <p>{item.qty} x ${item.price} = ${item.qty * item.price}</p>
            </>
            ))}
        </div>
        <button onClick={placeOrderHandler}>place order</button>
    </>
  )
}

export default PlaceOrder