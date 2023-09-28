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

const Success = () => {
  const navigate = useNavigate(); // Define the navigate function
  return (
    <>
      <RouteHistory page="orders" routeName="orders" />
      <div
        style={{
          minHeight: "100vh",
          width: "60%",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontWeight: 500,
            color: "#414B3B",
            marginTop: "100px",
            fontSize: "20px",
          }}
        >
          Payment is successful!
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontWeight: 400,
            color: "#414B3B",
            marginTop: "15px",
            fontSize: "15px",
          }}
        >
          Thank you for your purchase, you awesome person!
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#99958C",
              color: "#E4DCCD",
              width: "250px",
              marginTop: "30px",
              "&:hover": {
                backgroundColor: "#737373",
              },
            }}
          >
            shop for more!
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Success;
