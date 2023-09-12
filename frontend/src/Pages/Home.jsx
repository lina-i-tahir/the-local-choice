import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button } from '@mui/material';
import { Typography } from '@mui/material';
import Window from "../assets/Window.png";
import store from "../store";
import { Divider } from "@mui/material";
import Grid from '@mui/material/Grid';

const tempArr  = [ 1, 2, 3, 4]
const storeDisplay = (item) => {
    return (
        <>
            <Typography gutterBottom variant="h6" component="div"
                sx={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    margin: "10px 30px",
                    display: "flex",
                    justifyContent: "flex-start",
                }}>
                {item.storeName}
            </Typography>
            
            {/* <Grid container spacing={{ xs: 2, md: 3 }}>
                {Array.from(Array(4)).map((_, index) => (
                    <Grid item xs={3} key={index}>
                        dsf
                    </Grid>
                ))}
            </Grid> */}

            <Grid container spacing={{ xs: 3, md: 2 }}>
                {item.products.map((item,idx) => (
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
                ))}
            </Grid>
        </>
    )
}




{/* <>
<Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "10px 30px" }}>

<img src={item.image} style={{ width: "20%", margin: "0px 20px" }}/>
</Box>

<Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography gutterBottom variant="h6" component="div"
            sx ={{
                fontFamily: "Poppins",
                fontSize:"20px",
                margin:"10px 30px",
                display:"flex",
                justifyContent:"flex-start",
            }}>
            {item.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div"
            sx ={{
                fontFamily: "Poppins",
                fontSize:"20px",
                margin:"10px 30px",
                display:"flex",
                justifyContent:"flex-start",
            }}>
            {item.price}
            </Typography>
</Box>
</> */}
const Home = () => {
    return ( 
        <div style={{ display: "flex", flexDirection: "column", minHeight:"90vh" }}>
            <Box sx={{ display: "flex", justifyContent: "center", margin: "40px 0px", flexDirection: "row" }}>
                {tempArr.map((item) => {
                    return (
                        <img src={Window} style={{ width: "15%", margin: "-5px 40px" }}/>
                    )
                })}
            </Box>
            <Box sx={{ 
                display: "flex", 
                flexDirection: "column", 
                backgroundColor:"#F3EFE7", 
                flexGrow:1,
                alignItems:"flex-start",
            }}>
                {
                    store.map((item, idx) => {
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
            </Box>
        </div>
    );
}

export default Home;


