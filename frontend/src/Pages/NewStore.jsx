import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import RouteHistory from "../Components/RouteHistory";

const NewStore = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [form, setForm] = useState({
        storeName: "",
        storeImage: "",
      });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("form submitted");
        setForm({
            storeName: event.target.storeName.value,
            storeImage: selectedImage,
        });
    }

    // useEffect(() => {
    //     if (form.storeName !== "" && form.storeImage !== "") {
    //         postStore();
    //     }
    // }, [form]);

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
        <div>
            <RouteHistory page="new store" routeName="config/store/new" />
            <Box
                component="form"
                sx={{ "& .MuiTextField-root": { m: 1, width: "40ch" } }}
                noValidate
                autoComplete="off"
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
                    name="storeName"
                    defaultValue=""
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
                        width: "51ch",
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