
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
import Store from './Pages/Store';
import Orders from './Pages/Orders';
import Profile from './Pages/Profile';

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
          <Route path="/config" element={<Admin/>} />
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Error />} />
          <Route path="/stores" element={<Store/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
        {/* <FooterContent /> */}
      </Router>
    </div>
  );
}

export default App;