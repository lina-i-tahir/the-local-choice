import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import ImageForm from "../Components/ImageForm";
import { useParams } from "react-router-dom";
import Container from '@mui/material/Container';

const EditProduct = (props) => {
    const { id, productId } = useParams();
    console.log("id", id);
    console.log("productId", productId);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [store, setStore] = useState(null);
    const [productForm, setProductForm] = useState({
        price: "",
        quantity: "",
        description: "",
        category: "",
    }); 

    const updateProduct = async () => {
        await axios({
            method: "PUT",
            url: `http://localhost:8000/config/stores/${id}/products/${productId}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            data: productForm,
        })
        .then(function (response) {
            console.log(response);
            if (response.status === 200) {
                console.log("Created successfully");
                navigate(`/config/stores/${id}`);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    useEffect(() => {
        if (productForm.price !== "" && productForm.quantity !== "" && productForm.category !== "" && productForm.description !== "") {
            updateProduct();
        }
    }, [productForm]);

    const handleProductFormSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted");
        console.log("sadasd", event);
        setProductForm({
            price: event.target.productPrice.value,
            quantity: event.target.productQuantity.value,
            description: event.target.productDescription.value,
            category: event.target.productCategory.value,
        });

    }
    const getStores = async () => {
        await axios({
            method: "GET",
            url: `http://localhost:8000/config/stores/${id}/products/${productId}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            console.log(response.data);
            console.log(response.data);
            setStore(response.data);
            // console.log(response.data.store.products);
            // setStore(response.data.store.products);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getStores();
    }, []);

    return ( 
        <Container minWidth="xs" sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
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
                    marginTop: "20px",
                }}
            >
                Edit Product
            </Typography>
            {store ?
            <Box component="form"
                onSubmit= {handleProductFormSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "80%",
                }}>

                <TextField 
                    id="productPrice" 
                    label="Price" 
                    variant="outlined"
                    defaultValue={store.price}
                    sx={{
                        marginBottom: "20px",
                        marginTop: "20px",
                    }}
                />
                <TextField 
                    id="productQuantity" 
                    label="Quantity" 
                    variant="outlined"
                    defaultValue={store.quantity} 
                    sx={{
                        marginBottom: "20px",
                    }}
                />
                <TextField 
                    id="productCategory" 
                    label="Category" 
                    variant="outlined"
                    defaultValue={store.category} 
                    sx={{
                        marginBottom: "20px",
                    }}
                />
                <TextField 
                    id="productDescription" 
                    label="Description" 
                    variant="outlined"
                    defaultValue={store.description}
                    sx={{
                        marginBottom: "20px",
                    }}
                />
                <Button 
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#99958C",
                        color: "#E4DCCD",
                        marginTop: "20px",
                        '&:hover': {
                            backgroundColor: '#e4dccd',
                            color:"#75695a",
                            opacity: [0.9, 0.8, 0.7],
                        }
                    }}
                >
                    Save Changes
                </Button>
            </Box>: null
            }
        </Container>
     );
}
 
export default EditProduct;