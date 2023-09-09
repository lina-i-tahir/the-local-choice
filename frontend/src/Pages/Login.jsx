import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button } from '@mui/material';

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const postLogin = async () => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8000/login',
            headers: {
                "Content-Type": "application/json"
            },
            data: form
        })
        .then(function (response) {
            console.log(response);
            if (response.status === 201) {
                console.log("Login successful");
                navigate('/');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted")
        setForm({
            email: e.target.email.value,
            password: e.target.password.value,
        });
    }

    useEffect(() => {
        if (form.email !== '' && form.password !== '') {
            postLogin();
        }
    }, [form]);

    return ( 
        <Box component="form" 
             onSubmit={handleSubmit}
             sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}} 
             noValidate 
             autoComplete="off">
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    name="email"
                    defaultValue=""
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    name="password"
                    type="password"
                />
            </div>
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
        </Box>
     );
}
 
export default Login;