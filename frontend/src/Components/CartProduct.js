import { Grid, IconButton, Divider } from "@mui/material";
import { CartContext } from "../CardContext";
import { useContext } from "react";
import store from "../store";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = store[0].products.find(
    (item) => item._id === parseInt(id)
  );
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={1}>
          <IconButton>
            <DeleteOutlinedIcon
              onClick={() => cart.deleteFromCart(id)}
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
      <Divider variant="middle" />
    </>
  );
};

export default CartProduct;
