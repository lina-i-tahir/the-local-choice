import {useState, useEffect} from "react";
import axios from "axios";
import store from "../store"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Admin = () => {
    const actionStyle = {
        display: "flex",
        fontFamily: 'Poppins',
        fontWeight: 500,
        color: '#414B3B',
        textDecoration: 'underline', 
        fontSize:'16px',
        textAlign:'center',
        margin:'0px 20px',
        "&:hover": {
            color: "#737373",
            cursor: "pointer",
        }
    }

    const displayStore = store.map((item) => {
        return (
            <Card key={item.id} sx={{ maxWidth: 345, margin: "30px 15px", borderRadius:"10px", backgroundColor:"#EFEAE0"}}>
                <CardMedia
                    component="img"
                    height="200"
                    image={item.storeImage}
                    alt={item.storeName}
                    sx={{
                        objectFit: "contain",
                        width: "90%",
                        margin: "0 auto",
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div"
                    sx ={{
                        textAlign: "center",
                        fontFamily: "Poppins",
                        fontSize:"20px",
                        margin:"-10px 0px",
                    }}>
                        {item.storeName}
                    </Typography>
                </CardContent>
                <CardActions sx={{display:"flex", justifyContent:"center"}}>
                    <Link to="/config/store/storeID">
                        <Typography gutterBottom variant="h6" component="div"
                        sx ={actionStyle}>
                            edit
                        </Typography>
                    </Link>
                    <Typography gutterBottom variant="h6" component="div"
                    noWrap
                    sx={actionStyle}>
                        delete
                    </Typography>
                </CardActions>
            </Card>
        )
    })
    
    return ( 
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width:"100%" }}>
                {displayStore}
            </div>
            <Button variant="contained" 
            sx={{backgroundColor:"#99958C", 
                color:"#E4DCCD", 
                width:"50ch",
                margin:"30px auto",
                '&:hover': {
                backgroundColor: "#737373"}}}
                >
                Add New Store
            </Button>

        </div>
     );
}

export default Admin;

 