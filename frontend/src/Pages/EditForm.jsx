import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
// import store from "../store";
import {Box, TextField, Button, Container, Grid, Divider} from '@mui/material';
import { Typography } from '@mui/material';
import FieldDisabled from "../Components/FieldDisabled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ImageForm from "../Components/ImageForm";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const EditForm = () => {
    const [storeDetails, setStoreDetails] = useState([]);
    const { id } = useParams();

    const navigate = useNavigate();
    const [imageStorePreview, setImageStorePreview] = useState(null);
    
    const [form, setForm] = useState({
        name: "",
        image: "",
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted");
        setForm({
            name: event.target.name.value,
            image: imageStorePreview,
        });
    }

    const handleImageStoreChange = (event) => {
        console.log("image changed")
        const file = event.target.files[0];
        console.log(file);
        if (file) {
            // Create an image preview
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImageStorePreview(reader.result);
            };
        }
    };

    const postStoreDetails = () => {
        axios({
            method: "PUT",
            url: `http://localhost:8000/config/stores/${id}`,
            headers: {
                "Content-Type": "application/json",
            },
            data: form,
        })
        .then(function (response) {
            console.log(response);
            if (response.status === 201) {
                console.log("Created successfully");
                navigate(`/config/stores/${id}`);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    const deleteProduct = async (productId) => {
        await axios({
            method: "DELETE",
            url: `http://localhost:8000/config/stores/${id}/products/${productId}`,
        })
        .then((response) => {
            console.log(response);
            navigate("/config/stores");
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleDelete = (productId) => {
        if (window.confirm("Are you sure you want to delete this Product?")) {
            deleteProduct(productId);
        }
    }

    useEffect(() => {
        if (form.name !== "" && form.image !== "") {
            postStoreDetails();
        }
    }, [form]);

    const getStoreDetails = () => {
        axios({
            method: "GET",
            url: `http://localhost:8000/config/stores/${id}`,
        })
        .then((response) => {
            console.log(response);
            setStoreDetails(response.data.store);
            setImageStorePreview(response.data.store.image);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getStoreDetails();
    }, []);

    return ( 
        <Container minWidth="xs" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            {storeDetails.length !== 0 ?
                <Box 
                    component="form"
                    sx={{
                        marginTop: "20px",
                        display: "flex",
                        flexDirection: "column",
                        width: "70%",
                    }}
                    autoComplete="off"
                    onSubmit={handleFormSubmit}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            color: "#414B3B",
                            marginBottom: "20px",
                        }}
                    >
                        Edit Store
                    </Typography>
                    <TextField 
                        id="name" 
                        label="Name" 
                        variant="outlined" 
                        defaultValue={storeDetails.name}
                        sx={{
                            marginBottom: "20px",
                        }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            fontFamily: "Poppins",
                            fontWeight: 500,
                            color: "#414B3B",
                            fontSize: "16px",
                            marginBottom: "20px",
                        }}
                    >
                        Image Preview
                    </Typography>
                    <ImageForm image={imageStorePreview} func={handleImageStoreChange} inputId="upload-store-button" />

                    <TableContainer component={Paper} sx ={{
                        marginTop: "20px",
                        backgroundColor: "#EFEAE0",
                        borderRadius: "10px",
                        alignItems: "center",
                        margin: "30px auto",
                        width: "100%",
                    }}>
                        <Table>
                        <TableHead sx={{
                            width: "100%",
                            margin: "auto",
                        }}>
                            <TableRow sx={{width:"100%", margin:"auto"}}>
                                <TableCell>Item</TableCell>
                                <TableCell align="right" sx={{fontWeight:"600"}}>Image</TableCell>
                                <TableCell align="right" sx={{fontWeight:"600"}}>Price</TableCell>
                                <TableCell align="right" sx={{fontWeight:"600"}}>Quantity</TableCell>
                                <TableCell align="right" sx={{fontWeight:"600"}}>Category</TableCell>
                                <TableCell align="right" sx={{fontWeight:"600"}}>Description</TableCell>
                                <TableCell align="right" sx={{fontWeight:"600"}}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {storeDetails.products.map((item) => (
                                <TableRow
                                    key={item._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        <img src={item.image} alt={item.name} style={{width: "100px"}} />
                                    </TableCell>
                                    <TableCell align="right">{item.price}</TableCell>
                                    <TableCell align="right">{item.quantity}</TableCell>
                                    <TableCell align="right">{item.category}</TableCell>
                                    <TableCell align="right">{item.description}</TableCell>
                                    <TableCell align="right">
                                        <EditIcon 
                                        onClick={() => navigate(`/config/stores/${id}/products/${item._id}`)}
                                        sx={{
                                            color:"#75695a", 
                                            marginRight:"10px", 
                                            '&:hover':{
                                                color:"#e4dccd",
                                                cursor:"pointer",
                                        }}} />
                                        <DeleteOutlineIcon 
                                        onClick={() => handleDelete(item._id)}
                                        sx={{
                                            color:"#75695a", 
                                            marginRight:"10px", 
                                            '&:hover':{
                                                color:"#e4dccd",
                                                cursor:"pointer",
                                        }}} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                        </Table>
                    </TableContainer>
                    <Button variant="contained" component="span"
                        sx={{
                            backgroundColor:"#75695a",
                            boxShadow: "none",
                            '&:hover': {
                            backgroundColor: '#e4dccd',
                            color:"#75695a",
                            opacity: [0.9, 0.8, 0.7],
                        }
                        }}
                        onClick={() => navigate(`/config/stores/${id}/products`)}
                        >
                        Add Product
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: "#99958C",
                            color: "#E4DCCD",
                            marginTop: "20px",
                            marginBottom: "20px",
                            '&:hover': {
                                backgroundColor: '#e4dccd',
                                color:"#75695a",
                                opacity: [0.9, 0.8, 0.7],
                            }
                        }}
                    >
                        Save Changes
                    </Button>
                </Box>

            : null}
        </Container>
    );
}
 
export default EditForm;