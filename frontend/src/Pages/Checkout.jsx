import { useEffect, useContext} from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Container, Grid, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { useCreateOrderMutation } from "../Slices/orderSlice"
import RouteHistory from "../Components/RouteHistory"
import { CartContext } from "../CardContext"
import CartProduct from "../Components/CartProduct"
import Stack from '@mui/material/Stack';
import store from "../store"


const Checkout = () => {

    const [createOrder, { isLoading, error }] = useCreateOrderMutation()
    const navigate = useNavigate()
    const cart = useContext(CartContext);

    // const cart = {
    //     orderItems: [
    //         {
    //             name: "rainbox earrings",
    //             qty: 2, 
    //             image : "https://www.handfully.com/cdn/shop/files/image_5cea19a2-deed-447f-a2e1-173cb451a075_1024x1024@2x.jpg?v=1686143498",
    //             price : 29.99,
    //         },
    //         {
    //             name: "stickers",
    //             qty: 10, 
    //             image : "https://images.squarespace-cdn.com/content/v1/561debf1e4b08aeed3fd59c8/1553280098798-XINLBD55FOWYEXW4I9I8/P1170291+copy.jpg?format=1500w",
    //             price : 5.99,
    //         },
    //         {
    //             name: "stud earrings",
    //             qty: 8, 
    //             image : "https://www.handfully.com/cdn/shop/files/image_5cea19a2-deed-447f-a2e1-173cb451a075_1024x1024@2x.jpg?v=1686143498",
    //             price : 10.99,
    //         }
    //     ],
    //     shippingAddress: {
    //         address: "Orchard Road",
    //         city: "Town",
    //         postalCode: "252432",
    //         country: "Singapore"
    //     }, 
    //     paymentMethod: "paypal",
    //     itemsPrice: 105.99,
    //     taxPrice: 5.99,
    //     shippingPrice: 5,
    //     totalPrice: 115.27,
    // }

    const orderItems = cart.items.map((item) => item )
    const proceedToCheckout = () => {
        console.log(orderItems[0].id)
    }
    
    
    // const proceedToCheckout = async () => {
    //     try {
    //         const res = await createOrder({
    //             orderItems: cart.orderItems, 
    //             shippingAddress: cart.shippingAddress,
    //             paymentMethod: cart.paymentMethod,
    //             itemsPrice: cart.itemsPrice,
    //             shippingPrice: cart.shippingPrice,
    //             taxPrice: cart.taxPrice,
    //             totalPrice: cart.totalPrice,
    //         }).unwrap()
    //         navigate(`/checkout/${res._id}`)
    //     } catch (error) {
    //         toast.error(error)
    //     }
    // }


  return (
    <>  
        <Container maxWidth="xl" sx={{backgroundColor: "#e4dccd"}}>
        <RouteHistory page="checkout" routeName="checkout" />
            <Typography
              variant="h4"
              noWrap
              sx={{
                display: "flex",
                justifyContent: "center",
                fontStyle: "bold",
                color: "#414B3B",
                textDecoration: "none",
              }}
            > 
            Your Cart
            </Typography>
            <Stack spacing={1} 
                    alignItems="center"
                    >
            {cart.items.map((currentProduct, idx) => (
                                    <Grid container spacing={0}
                                                    sx={{backgroundColor: "#f3efe7",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        padding: "10px",
                                                        maxWidth: "75%",
                                                        }}>
                                        <CartProduct
                                        key={idx}
                                        id={currentProduct.id}
                                        quantity={currentProduct.quantity}
                                        ></CartProduct>
                                    </Grid>
                            ))}

                <Button
                    variant="contained"
                    color="primary"
                    onClick={proceedToCheckout}
                    sx={{
                        backgroundColor: "#99958C",
                        color: "#E4DCCD",
                        width: "20ch",
                        height: "70px",
                        textAlign: "center",
                        padding: "18px",
                        "&:hover": {
                            backgroundColor: "#737373",
                                },
                        }}
                >
                    checkout ${cart.getTotalCost().toFixed(2)}
                </Button>
            </Stack>

            
        </Container>


        {/* <div>
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
        <button onClick={CheckoutHandler}>place order</button> */}
    </>
  )
}

export default Checkout