import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../Slices/apiSlice";

const PayButton = ({ cartItems }) => {
  const handleCheckout = () => {
    console.log(cartItems);
  };
  return (
    <>
      <button onClick={() => handleCheckout()}>Pay Button</button>
    </>
  );
};

export default PayButton;
