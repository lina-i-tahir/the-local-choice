import {
  Box,
  TextField,
  Button,
  Container,
  Grid,
  Divider,
} from "@mui/material";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Typography } from "@mui/material";
import RouteHistory from "../Components/RouteHistory";

const Cancel = () => {
  const navigate = useNavigate(); // Define the navigate function
  return (
    <>
      {" "}
      <RouteHistory page="orders" routeName="orders" />
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
          Sad to see you go ):
        </Typography>
        <Button
          onClick={() => navigate("/")}
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
          but, you can shop for more!
        </Button>
      </Container>
    </>
  );
};

export default Cancel;
