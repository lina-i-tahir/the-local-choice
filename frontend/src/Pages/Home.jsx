import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button } from '@mui/material';
import { Typography } from '@mui/material';
import Window from "../assets/Window.png";
// import store from "../store";
import { Divider } from "@mui/material";
import Grid from '@mui/material/Grid';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { Link } from "react-router-dom";
const tempArr  = [ 1, 2, 3, 4]

const Home = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [storeOverview, setStoreOverview] = useState([]);
    const [store, setStore] = useState([]);
    const maxCount = Math.floor(store.length / 2);
    const token = localStorage.getItem('token');

    const storeDisplay = (item) => {
        return (
            <>  
                <Link to={`/stores/${item._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography gutterBottom variant="h6" component="div"
                    sx={{
                        fontFamily: "Poppins",
                        fontSize: "20px",
                        margin: "10px 30px",
                        display: "flex",
                        justifyContent: "flex-start",
                        '&:hover': {
                            color: "#737373",
                            cursor: "pointer",
                        }
                    }}>
                        {item.name}
                </Typography>
                </Link>
                
                
                <Grid container spacing={{ xs: 3, md: 2 }}>
                    {item.products.map((item,idx) => (
                        idx<4 ?
                        <Grid item xs={3} key={idx}>
                            <img src={item.image} style={{ width: "80%", margin: "0px 30px" }} />
                            <Typography gutterBottom variant="h6" component="div"
                            sx ={{
                                fontFamily: "Poppins",
                                fontSize:"20px",
                                marginBottom:"5px",
                                display:"flex",
                                justifyContent:"center",
                            }}>
                            {item.name}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div"
                            sx ={{
                                fontFamily: "Poppins",
                                fontSize:"20px",
                                marginBottom:"5px",
                                display:"flex",
                                justifyContent:"center",
                            }}>
                            {item.price}
                            </Typography>
                        </Grid>
                        : null
                    ))}
                </Grid>
            </>
        )
    }


    const getStore = async () => {
        await axios({
            method: "GET",
            url: `http://localhost:8000/stores`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            console.log(response.data.stores);
            setStore(response.data.stores);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    useEffect(() => {
        getStore();
    }, []);

    
    const clickHandler = (e) => {
        if (e === "increase") {
            if (count < maxCount) {
                setCount(count + 1);
            }
        }
        else {
            if (count > 0) {
                setCount(count - 1);
            }
        }
    }
    useEffect(() => {
        if (count === 0) {
            setStoreOverview(store.slice(count, count + 2));
        }
        else{
            setStoreOverview(store.slice(count * 2, count * 2 + 2));
        }
    }, [count, store]);

    return ( 
        <div style={{ display: "flex", flexDirection: "column", minHeight:"90vh" }}>
            <Box sx={{ display: "flex", justifyContent: "center", margin: "40px 0px", flexDirection: "row" }}>
                {tempArr.map((item) => {
                    return (
                        <img src={Window} style={{ width: "15%", margin: "-5px 40px" }}/>
                    )
                })}
            </Box>
            {store ? 
            <Box sx={{ 
                display: "flex", 
                flexDirection: "column", 
                backgroundColor:"#F3EFE7", 
                flexGrow:1,
                alignItems:"flex-start",
            }}>
                {
                    storeOverview.map((item, idx) => {
                        return (
                            <div>
                                {(idx+1)%2!==0 ? 
                                    <div style={{width: "100vw"}}>
                                        {storeDisplay(item)}
                                        <Divider variant="middle" sx={{ flexGrow:1}} />
                                    </div>
                                : 
                                    storeDisplay(item)
                                }
                            </div>
                        )
                    })
                }
            </Box>:null}
            <Box sx={{
                display: "flex",
                justifyContent: "space-between", // This will separate the two Typography components
                backgroundColor: "#F3EFE7",
                flexDirection: "row",
                padding: "0 20px",  // This is optional. Adds some space on the sides.
            }}>

                {count === 0? null:
                <Typography variant="h6" component="div" onClick={() => clickHandler("decrease")}
                sx ={{
                    fontFamily: "Poppins",
                    fontSize:"15px",
                    display:"flex",
                    justifyContent:"flex-start",
                    color:"#99958C",
                }}>
                    <ArrowCircleLeftOutlinedIcon sx={{ width:"20px",marginLeft:"5px", marginTop:"2px" }}/>
                </Typography>}
                    <Typography variant="h6" component="div" onClick={() => clickHandler("increase")}
                    sx ={{
                        fontFamily: "Poppins",
                        fontSize:"15px",
                        display:"flex",
                        justifyContent:"flex-end",
                        color:"#99958C",
                    }}>
                        discover more 
                        <ArrowCircleRightOutlinedIcon sx={{ width:"20px",marginLeft:"5px", marginTop:"2px" }}/>
                </Typography>
            </Box>

        </div>
    );
}

export default Home;