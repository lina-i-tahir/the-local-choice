import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
            <Box
                component="form"
                onSubmit={handleSubmit}  // Binding the handleSubmit function
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <label>Sign Up</label>
                    <br />
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
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </div>
    );
}
 
export default SignUp;
