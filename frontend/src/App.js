import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import { useState } from "react";
import axios from "axios";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import FooterContent from "./Components/FooterContent";
import Admin from "./Pages/Admin";
import Error from "./Pages/Error";
import Store from "./Pages/Store";
import Orders from "./Pages/Orders";
import Profile from "./Pages/Profile";
import NewStore from "./Pages/NewStore";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";

import EditForm from "./Pages/EditForm";
import AllStores from "./Pages/AllStores";

function App() {
  const [user, setUser] = useState(null);

  // const postLogin = async () => {
  //   await axios({
  //       method: 'GET',
  //       url: 'http://localhost:8000/login',
  //       headers: {
  //           "Content-Type": "application/json"
  //       },
  //       data: form
  //   })
  //   .then(function (response) {
  //       console.log(response);
  //       navigate('/');
  //   })
  //   .catch(function (error) {
  //       console.log(error);
  //   });
  // }
  return (
    <div
      className="App"
      style={{ backgroundColor: "#E4DCCD", height: "100vh" }}
    >
      <Router>
        {/* <nav style={{display:"flex", justifyContent:"space-around"}}>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/">Home</Link>
        </nav> */}
        <NavBar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/config/stores" element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/stores" element={<AllStores />} />
          <Route path="/stores/:id" element={<Store />} />
          <Route path="/products" element={<Products />} />
          <Route path="//stores/:id/:id" element={<ProductDetail />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/config/stores/new" element={<NewStore />} />
          <Route path="/config/stores/:id" element={<EditForm />} />
        </Routes>
        {/* <FooterContent /> */}
      </Router>
    </div>
  );
}

export default App;
