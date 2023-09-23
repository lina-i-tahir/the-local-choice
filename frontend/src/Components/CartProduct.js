import { Grid, IconButton, Divider, CircularProgress } from "@mui/material";
import { CartContext } from "../CardContext";
import { useContext } from "react";
import store from "../store";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Slices/cartSlice";

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const productName = props.productName;
  const productId = props.productId;
  const quantity = props.quantity;
  const productPrice = props.productPrice
  const productImage = props.productImage

  const dispatch = useDispatch()

  const removeFromCartHandler = async (id) => {
      dispatch(removeFromCart(id))
  }

  return (
    <>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={1}>
            <IconButton>
              <DeleteOutlinedIcon
                onClick={() => removeFromCartHandler(productId)}
                sx={{ position: "absolute", transform: "-50" }}
              />
            </IconButton>
          </Grid>
          <Grid item xs={5}>
            <img
              src={productImage}
              alt={productName}
              style={{ width: "100%", margin: "0px 0px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <h4>{productName}</h4>
            qty: {quantity}
            <br />
            cost: ${(quantity * productPrice).toFixed(2)}
            <br />
            <br />
          </Grid>
        </Grid>
      <Divider variant="middle" />
    </>
  );
};

export default CartProduct;
