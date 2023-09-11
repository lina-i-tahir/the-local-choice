import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button } from '@mui/material';
import { Typography } from '@mui/material';
import Window from "../assets/Window.png";
import store from "../store";
import { Divider } from "@mui/material";

const tempArr  = [ 1, 2, 3, 4]

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
                                        <Typography gutterBottom variant="h6" component="div"
                                        sx ={{
                                            fontFamily: "Poppins",
                                            fontSize:"20px",
                                            margin:"10px 30px",
                                            display:"flex",
                                            justifyContent:"flex-start",
                                        }}>
                                        {item.storeName}
                                        </Typography>
                                        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start" }}>
                                            {
                                                item.products.map((item) => {
                                                    return (
                                                        <Typography gutterBottom variant="h6" component="div"
                                                            sx={{
                                                                fontFamily: "Poppins",
                                                                fontSize: "20px",
                                                                margin: "10px 30px"
                                                            }}>
                                                            {item.name}
                                                        </Typography>
                                                    )
                                                })
                                            }
                                        </div>
                                        <Divider variant="middle" sx={{ flexGrow:1}} />
                                    </div>
                                : 
                                    <Typography gutterBottom variant="h6" component="div"
                                        sx ={{
                                            textAlign: "center",
                                            fontFamily: "Poppins",
                                            fontSize:"20px",
                                            margin:"0px 30px",
                                        }}>
                                        {item.storeName}
                                    </Typography>
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


