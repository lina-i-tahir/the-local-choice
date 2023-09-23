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
    const { cartItems } = useSelector((state) => state.cart)
    const { totalPrice } = useSelector((state) => state.cart)

    const orderItems = cart.items.map((item) => item )

    const proceedToPayment = () => {
        console.log(orderItems)
    }
    

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
            {cartItems.map((currentProduct, idx) => (
                                    <Grid container spacing={0}
                                                    sx={{backgroundColor: "#f3efe7",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        padding: "10px",
                                                        maxWidth: "75%",
                                                        }}>

                                        <CartProduct
                                            key={idx}
                                            productName={currentProduct.name}
                                            productId={currentProduct._id}
                                            quantity={currentProduct.quantity}
                                            productPrice={currentProduct.price}
                                            productImage={currentProduct.image}
                                        ></CartProduct>
                                    </Grid>
                            ))}
                <h2>Total Cost : ${totalPrice}</h2>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={proceedToPayment}
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
                    proceed to payment
                </Button>
            </Stack>

            
        </Container>
    </>
  )
}

export default Checkout