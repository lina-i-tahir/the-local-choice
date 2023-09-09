import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import { useState } from 'react';
import axios from 'axios';
import Home from './Pages/Home';

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
    <div className="App">
      <Router>
        <nav style={{display:"flex", justifyContent:"space-around"}}>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
