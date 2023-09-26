import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import RouteHistory from "../Components/RouteHistory";

const NewStore = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [form, setForm] = useState({
        name: "",
        image: "",
    });
    const token = localStorage.getItem('token');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted");
        setForm({
            name: event.target.name.value,
            image: imagePreview,
        });
    }
    
    const createStore = async () => {
        await axios({
          method: "POST",
          url: "http://localhost:8000/config/stores",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
          data: form,
        })
          .then(function (response) {
            console.log(response);
            if (response.status === 201) {
              console.log("Created successfully");
              navigate("/config/stores");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };

    useEffect(() => {
        if (form.name !== "" && form.image !== "") {
          createStore();
        }
    }, [form]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            
            // Create an image preview
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
        }
    };

    return ( 
        <div style={{minHeight:"100vh"}}>
            <RouteHistory page="new store" routeName="config/stores/new" />
            <Box
                component="form"
                sx={{ "& .MuiTextField-root": { m: 1, width: "40ch" } }}
                noValidate
                autoComplete="off"
                onSubmit={handleFormSubmit}
            >
                <Typography
                variant="h6"
                noWrap
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    color: "#414B3B",
                    textDecoration: "none",
                    margin: "20px 0px",
                    fontSize: "26px",
                    textAlign: "center",
                }}
                >
                New Store
                </Typography>

                <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Store Name"
                    color="secondary"
                    name="name"
                    defaultValue=""
                    sx={{

                      }}
                />
                </div>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {imagePreview && <img src={imagePreview} alt="preview" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '10px', marginTop:"10px" }} />}
                    <Typography gutterBottom variant="body2">
                        {selectedImage ? selectedImage.name : 'No image selected'}
                    </Typography>
                    <label htmlFor="upload-button">
                        <input
                            style={{ display: 'none' }}
                            id="upload-button"
                            type="file"
                            onChange={handleImageChange}
                        />
                        <Button variant="contained" component="span"
                            sx={{
                                backgroundColor:"#75695a",
                                color: "primary.light",
                                boxShadow: "none",
                                '&:hover': {
                                backgroundColor: '#e4dccd',
                                color:"#75695a",
                                opacity: [0.9, 0.8, 0.7],
                            }
                            }}>
                            Upload Image
                        </Button>
                    </label>
                </Box>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#99958C",
                        color: "#E4DCCD",
                        width: "25%",
                        // marginRight:"130px",
                        // marginLeft:"200px",
                        marginTop: "30px",
                        "&:hover": {
                        backgroundColor: "#737373",
                        },
                    }}
                    >
                    Save
                </Button>
                </Box>
            </div>
     );
}
 
export default NewStore;