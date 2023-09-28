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
import axios from "axios";
import Notification from "../Components/Notification";
import { useEffect, useContext } from "react";
import {useState} from "react";


const Success = () => {
  const navigate = useNavigate(); // Define the navigate function
  const { session_id } = useParams();
  const [orderData, setOrderData] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const createOrder = async () => {
      await axios({
        method: "POST",
        url: `http://localhost:8000/scsuccess/${session_id}`,
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => {
        console.log(response);
        if (response.status === 201) {
            console.log("Created successfully");
            setOrderData(response.data.order);
            setOpenSnackbar(true);
            setSnackbarMessage("Order created successfully! Redirecting to home page...");
            setSnackbarSeverity("success");
            setTimeout(() => {
                navigate("/home");
            }, 3000);
        }
    })
    .catch((error) => {
        console.log(error);
        setOpenSnackbar(true);
        setSnackbarMessage("Error creating order!");
        setSnackbarSeverity("error");
    });
  }
  useEffect(() => {
    // Call the function if session_id exists
    console.log(session_id);
    if (session_id) {
      createOrder();
    }
  }, []);
  return (
    <>
      <RouteHistory page="orders" routeName="orders" />
      <Container maxWidth="xs" zeroMinWidth>
        <Typography
          variant="h4"
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
          Thank you for your purchase you awesome person!
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
          shop for more!
        </Button>
        <Notification openSnackbar={openSnackbar} handleCloseSnackbar={handleCloseSnackbar} snackbarMessage={snackbarMessage} snackbarSeverity={snackbarSeverity} vertical="bottom" horizontal="right"/>
      </Container>
    </>
  );
};

export default Success;