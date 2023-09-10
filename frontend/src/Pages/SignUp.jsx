import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RouteHistory from '../Components/RouteHistory';

const SignUp = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const postUser = async () => {
        await axios({
            method: 'POST',
            url: 'http://localhost:8000/signup',
            headers: {
                "Content-Type": "application/json"
            },
            data: form
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted")
        const newForm = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };
        setForm(newForm);  // Updating the form state
        // postUser();        // Sending the form data to the server
    }

    useEffect(() => {
        if (form.firstName !== '' && form.lastName !== '' && form.email !== '' && form.password !== '') {
            postUser();
            navigate('/login');
        }
    }, [form]);

    return (  
        <div>
            <RouteHistory page="create account" routeName="signup"/>

            <Box
                component="form"
                onSubmit={handleSubmit}  // Binding the handleSubmit function
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                        <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            letterSpacing: '0rem',
                            color: '#414B3B',
                            textDecoration: 'none', 
                            margin:'20px 0px',
                            fontSize:'26px',
                            textAlign:'center',
                        }}
                    >
                        Create Account
                    </Typography>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        defaultValue=""
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        defaultValue=""
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        defaultValue=""
                    />
                </div>
                <div>
                    <TextField
                        required
                        type="password"
                        id="password"
                        name="password"
                        label="Password"
                        defaultValue=""
                    />
                </div>
                <Button type="submit" variant="contained" 
                        sx={{backgroundColor:"#99958C", 
                            color:"#E4DCCD", 
                            width:"51ch",
                            marginTop:"40px",
                            '&:hover': {
                            backgroundColor: "#737373"}}}>
                    Sign Up
                </Button>
            </Box>
        </div>
    );
}
 
export default SignUp;
