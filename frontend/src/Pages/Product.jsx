import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
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
import { Link } from "react-router-dom";
import RouteHistory from "../Components/RouteHistory";
import store from "../store";

const Product = () => {
  // const { id: productsId } = useParams();
  // const storeProduct = store.find((p) => p.id === productsId);
  // console.log(storeProduct);

  return (
    <>
      <RouteHistory page="product" routeName="product" />
      <Container>
        {/* <div className="product-description">description</div>
        <div className="product-reviews">customer reviews</div> */}
        <Grid container>
          <Grid item sm={6}>
            <img
              width={480}
              src="https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg"
              alt="product"
            />
            <Grid item sm={8}>
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
            </Grid>
          </Grid>
          <Grid item sm={6}>
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
                marginTop: "20px ",
              }}
            >
              Product Name
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
                marginTop: "20px",
                textAlign: "left",
              }}
            >
              $38.80
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
                marginTop: "20px",
                textAlign: "left",
              }}
            >
              qty (dropdown)
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
                marginTop: "50px",
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
            variant="h7"
            noWrap
            sx={{
              display: "flex",
              justifyContent: "left",
              fontFamily: "Poppins",
              fontWeight: 300,
              color: "#414B3B",
              textDecoration: "none",
              margin: "50px",
            }}
          >
            description
          </Typography>
        </Grid>
        <Divider variant="middle" />

        <Grid item sm={8}>
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
              margin: "50px",
            }}
          >
            customer reviews
          </Typography>
        </Grid>
      </Container>
    </>
  );
};

export default Product;
