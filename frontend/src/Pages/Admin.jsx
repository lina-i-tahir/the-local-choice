import {useState, useEffect, useParams} from "react";
import axios from "axios";
// import store from "../store"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Admin = () => {

    const [store, setStore] = useState([]);

    const getStores = async () => {
        await axios({
            method: "GET",
            url: "http://localhost:8000/config/stores",
        })
        .then((response) => {
            console.log(response);
            setStore(response.data.stores);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleDelete = (storeId) => {
        if (window.confirm("Are you sure you want to delete this store?")) {
            deleteStore(storeId);
        }
    }

    const deleteStore = async (storeId) => {
        await axios({
            method: "DELETE",
            url: `http://localhost:8000/config/stores/${storeId}`,
        })
        .then((response) => {
            console.log(response);
            getStores();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getStores();
    }, []);

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
                    image={item.image}
                    alt={item.name}
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
                        {item.name}
                    </Typography>
                </CardContent>
                <CardActions sx={{display:"flex", justifyContent:"center"}}>
                    <Link key={item._id} to={`/config/stores/${item._id}`}>
                        <Typography gutterBottom variant="h6" component="div"
                        sx ={actionStyle}
                        >
                            edit
                        </Typography>
                    </Link>
                    <Typography gutterBottom variant="h6" component="div"
                    noWrap
                    onClick={() => handleDelete(item._id)}
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
                {store.length > 0 ? displayStore : 
                <Typography variant="h6" component="div"
                sx ={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize:"20px",
                    margin:"30px 0px",
                }}>
                    No stores added yet
                </Typography>}
            </div>
            <Button variant="contained" 
            sx={{backgroundColor:"#99958C", 
                color:"#E4DCCD", 
                width:"50ch",
                margin:"30px auto",
                '&:hover': {
                backgroundColor: "#737373"}}}
                href = "/config/stores/new"
                >
                Add New Store
            </Button>
            <Button variant="contained"
            sx={{backgroundColor:"#99958C", 
                color:"#E4DCCD", 
                width:"50ch",
                margin:"auto",
                '&:hover': {
                backgroundColor: "#737373"}}}
                href = "/config/stores/orders"
                >
                Manage Order Status
            </Button>

        </div>
     );
}

export default Admin;

 