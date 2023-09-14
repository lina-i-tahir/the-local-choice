import { useState, useEffect } from "react";
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
import ImageGrid from "../Components/ImageGrid";
import { Typography } from "@mui/material";
import RouteHistory from "../Components/RouteHistory";
import store from "../store";
import products from "../products";

// const oneProduct = ({ item }) => {
const displayProduct = products.map((item, idx) => {
  // const { id: productId } = useParams()
  // const product = products.find((p) => p.id === productId)
  return (
    <>
      <Grid container spacing={{ xs: 3, md: 2 }}>
        <Grid item xs={3} md={6} key={idx}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "80%", margin: "0px 30px" }}
          />

          {/* <Grid item sm={8} md={8}>
            <Typography
              variant="h7"
              noWrap
              sx={{
                display: "flex",
                justifyContent: "left",
                fontFamily: "Poppins",
                fontWeight: 300,
                color: "#414B3B",
                textDecoration: "none",
                margin: "30px 50px",
              }}
            >
              <ImageGrid />
            </Typography>
          </Grid> */}
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
              margin: "30px 0px 0px 0px",
            }}
          >
            {item.name}
          </Typography>
          <Typography
            variant="h7"
            noWrap
            sx={{
              display: "flex",
              justifyContent: "left",
              fontFamily: "Poppins",
              fontWeight: 100,
              color: "#414B3B",
              textDecoration: "none",
              margin: "20px 0px 0px 0px",
              textAlign: "left",
            }}
          >
            $ {item.price}
          </Typography>
          <Typography
            variant="h7"
            noWrap
            sx={{
              display: "flex",
              justifyContent: "left",
              fontFamily: "Poppins",
              fontWeight: 100,
              color: "#414B3B",
              textDecoration: "none",
              margin: "20px 0px 0px 0px",
              textAlign: "left",
            }}
          >
            qty (countInStock dropdown)
          </Typography>
          <Button
            type="submit"
            variant="contained"
            sx={{
              display: "flex",
              backgroundColor: "#99958C",
              color: "#E4DCCD",
              width: "20ch",
              textAlign: "center",
              margin: "50px 0px 0px 0px",
              "&:hover": {
                backgroundColor: "#737373",
              },
            }}
          >
            add to cart
          </Button>
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
          {item.description}
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
          customer reviews {item.reviewRating}
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
    </>
  );
});

const Product = () => {
  return (
    <>
      <RouteHistory page="product" routeName="product" />
      <Container>{displayProduct}</Container>
      {products.map((item) => (
        <Link key={item.id} to={`/product/${item.id}`}>
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default Product;
