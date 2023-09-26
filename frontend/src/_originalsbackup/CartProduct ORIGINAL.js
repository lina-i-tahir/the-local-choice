import { Grid, IconButton, Divider, CircularProgress } from "@mui/material";
import { CartContext } from "../CardContext";
import { useContext } from "react";
import store from "../store";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useState, useEffect } from "react";
import axios from "axios";

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const storeId = props.storeId;
  const productId = props.productId;
  const quantity = props.quantity;

  const [productData, setProductData] = useState(null);
  // const product = store[0].products.find((item) => item._id === parseInt(id));

  const getProduct = async ({storeId, productId}) => {
    await axios({
        method: "GET",
        url: `http://localhost:8000/config/stores/${storeId}/products/${productId}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
    .then((response) => {
        console.log(response.data);
        setProductData(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
  }
  
  useEffect(() => {
      getProduct({storeId, productId});
  }, [storeId, productId]);
  
  // const productData = store[0].products.find(
  //   (item) => item._id === parseInt(id)
  // );

  console.log("product Data", productData)
  
  return (
    <>
      {productData === null ? ( // Render loading indicator while productData is null
        <CircularProgress />
      ) : (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={1}>
            <IconButton>
              <DeleteOutlinedIcon
                onClick={() => cart.deleteFromCart(productId)}
                sx={{ position: "absolute", transform: "-50" }}
              />
            </IconButton>
          </Grid>
          <Grid item xs={5}>
            <img
              src={productData.image}
              alt={productData.name}
              style={{ width: "100%", margin: "0px 0px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <h4>{productData.name}</h4>
            qty: {quantity}
            <br />
            cost: ${(quantity * productData.price).toFixed(2)}
            <br />
            <br />
          </Grid>
        </Grid>
      )}
      <Divider variant="middle" />
    </>
  );
};

export default CartProduct;
