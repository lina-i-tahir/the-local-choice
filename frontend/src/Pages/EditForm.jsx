import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import store from "../store";
import {Box, TextField, Button, Container, Grid, Divider} from '@mui/material';
import { Typography } from '@mui/material';
import FieldDisabled from "../Components/FieldDisabled";

const EditForm = () => {
    const { id } = useParams();
    console.log("adsad", id)
    const storeDetails = store.find((item) => item._id === (id));
    console.log(storeDetails);

    return ( 
        <Container maxWidth="xs">
            <Typography
                variant="h4"
                noWrap
                sx={{
                    display: "flex",
                    justifyContent: "center ",
                    fontFamily: "Poppins",
                    fontWeight: 300,
                    color: "#414B3B",
                    textDecoration: "none",
                    margin:"20px auto"
                }}
            >
                {storeDetails.storeName}
            </Typography>
        </Container>
    );
}
 
export default EditForm;