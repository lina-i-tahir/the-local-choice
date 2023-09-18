import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Container,
  Grid,
  Divider,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Typography } from "@mui/material";
import RouteHistory from "../Components/RouteHistory";
// import products from "../products";
import store from "../store";
import Rating from "../Components/Rating";

// cart context
import { CartContext } from "../CardContext";
import { useCart } from "../CardContext";

// import AddToCartSelect from "../Components/AddToCartSelect";

const ProductDetail = () => {
  // qty-countInStock
  // const [qty, setQty] = useState("");

  // const handleChange = (event) => {
  //   setQty(event.target.value);
  // };

  const { id } = useParams();
  const product = store[0].products.find((item) => item._id === parseInt(id));
  const navigate = useNavigate(); // Define the navigate function

  // cart context
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQty(product._id);
  console.log(cart.items);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    cart.addToCart(product._id, quantity);
  };

  if (!product) {
    // Handle the case where the product is not found
    return (
      <Container maxWidth="xs">
        <Typography
          variant="h4"
          noWrap
          sx={{
            display: "flex",
            justifyContent: "center ",
            fontFamily: "Poppins",
            fontWeight: 300,
            color: "#414B3B",
            textDecoration: "none",
            margin: "150px 0px 0px 0px",
          }}
        >
          Product not found
        </Typography>
        <Button
          onClick={() => navigate("/products")}
          variant="contained"
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#99958C",
            color: "#E4DCCD",
            width: "20ch",
            margin: "50px 0px 0px 110px",
            "&:hover": {
              backgroundColor: "#737373",
            },
          }}
        >
          Go back to products
        </Button>
      </Container>
    );
  }

  return (
    <>
      <RouteHistory page="stores/1" routeName="stores/1" />
      <Container>
        <Grid container spacing={{ xs: 3, md: 2 }}>
          <Grid item xs={3} md={6} key={id}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "80%", margin: "0px 30px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              noWrap
              sx={{
                display: "flex",
                justifyContent: "left",
                fontFamily: "Poppins",
                fontWeight: 300,
                color: "#414B3B",
                textDecoration: "none",
                margin: "50px 0px 0px 0px",
              }}
            >
              {product.name}
            </Typography>
            <Typography
              variant="h5"
              noWrap
              sx={{
                display: "flex",
                justifyContent: "left",
                fontFamily: "Poppins",
                fontWeight: 100,
                color: "#414B3B",
                textDecoration: "none",
                margin: "20px 0px 30px 0px",
                textAlign: "left",
              }}
            >
              ${product.price}
            </Typography>
            {/* <div>
              <FormControl fullWidth>
                <InputLabel id="quantity-label">Quantity</InputLabel> */}
            {/* <Select
                  labelId="quantity-label"
                  id="quantity-select"
                  value={quantity}
                  // label="Quantity"
                  onChange={handleQuantityChange}
                  sx={{ maxWidth: "100px", backgroundColor: "#F8F5ED" }}
                >
                  {Array.from({ length: 10 }, (_, index) => (
                    <MenuItem key={index + 1} value={index + 1}>
                      {index + 1}
                    </MenuItem>
                  ))}
                </Select> */}
            <div>
              <FormControl fullWidth>
                <InputLabel id="quantity-label">Quantity</InputLabel>
                <Select
                  labelId="quantity-label"
                  id="quantity-select"
                  value={quantity}
                  onChange={handleQuantityChange} // Update the quantity when selection changes
                  sx={{ maxWidth: "100px", backgroundColor: "#F8F5ED" }}
                >
                  {Array.from({ length: 10 }, (_, index) => (
                    <MenuItem key={index + 1} value={index + 1}>
                      {index + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
                sx={{
                  display: "flex",
                  backgroundColor: "#99958C",
                  color: "#E4DCCD",
                  width: "20ch",
                  textAlign: "center",
                  margin: "30px 0px 0px 0px",
                  padding: "20px",
                  "&:hover": {
                    backgroundColor: "#737373",
                  },
                }}
              >
                Add to Cart
              </Button>
            </div>
            {/* </div> */}
            {/* <AddToCartSelect /> */}
          </Grid>
        </Grid>
        <Grid item sm={8}>
          <Typography
            variant="h6"
            noWrap
            sx={{
              display: "flex",
              justifyContent: "left",
              fontFamily: "Poppins",
              fontWeight: 400,
              color: "#414B3B",
              textDecoration: "none",
              margin: "50px",
              textOverflow: "clip",
            }}
          >
            description
          </Typography>
        </Grid>
        <Grid item sm={8} zeroMinWidth>
          <Typography
            variant="h7"
            sx={{
              display: "flex",
              justifyContent: "left",
              fontFamily: "Poppins",
              fontWeight: 100,
              color: "#414B3B",
              textDecoration: "none",
              margin: "50px",
              textAlign: "left",
            }}
          >
            {product.description}
          </Typography>
        </Grid>
        <Divider variant="middle" />
        <Grid item sm={8}>
          <Typography
            variant="h6"
            noWrap
            sx={{
              display: "flex",
              justifyContent: "left",
              fontFamily: "Poppins",
              fontWeight: 400,
              color: "#414B3B",
              textDecoration: "none",
              margin: "50px",
            }}
          >
            customer reviews <Rating value={product.reviewRating} />
          </Typography>
        </Grid>
        <Grid item sm={8}>
          <Typography
            variant="h7"
            sx={{
              display: "flex",
              justifyContent: "left",
              fontFamily: "Poppins",
              fontWeight: 100,
              color: "#414B3B",
              textDecoration: "none",
              margin: "50px",
              textAlign: "left",
            }}
          >
            (reviewSchema) Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Incidunt velit deserunt, aliquam maiores nesciunt rem quasi
            iusto eaque! Ad libero deserunt fugit quidem, ullam quae repellendus
            consequatur quam? Rem, consequuntur!
          </Typography>
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetail;
