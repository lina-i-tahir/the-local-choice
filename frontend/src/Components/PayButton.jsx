import { Button } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../constants";

// const token = localStorage.getItem("token");

const PayButton = ({ cartItems }) => {
  const url = BASE_URL;

  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
  console.log(user._id);

  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItems,
        userId: user._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
    console.log(cartItems, user._id);
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleCheckout()}
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
    </>
  );
};

export default PayButton;
