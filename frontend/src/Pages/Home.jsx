import { useState, useEffect } from "react";
import { Box, TextField, Button, Grid, Container } from '@mui/material';
import { Typography } from '@mui/material';
import Window from "../assets/Window.png";
import { Divider } from "@mui/material";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { useGetStoresQuery } from "../Slices/storeSlice";
import StoresOverviewDisplay from "../Components/StoresOverviewDisplay";
import WindowAnimation from "../Components/WindowAnimation";



const Home = () => {
    const { data: stores, isLoading, error } = useGetStoresQuery()
    const [count, setCount] = useState(0);
    const [maxCount, setMaxCount] = useState(0);
    const [storeOverview, setStoreOverview] = useState([]);

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

    const arrowStyle = { 
        width:"20px",
        marginLeft:"5px", 
        marginTop:"5px",
        '&:hover': {
            cursor: "pointer",
            color: "#414B3B"}
    }

        useEffect(() => {
            if (!isLoading) {
            if (count === 0) {
                setStoreOverview((stores.stores).slice(count, count + 2));
                setMaxCount(Math.floor((stores.stores).length / 2))
            }
            else {
                setStoreOverview((stores.stores).slice(count * 2, count * 2 + 2));
                setMaxCount(Math.floor((stores.stores).length / 2))
            }
        }
        }, [count, stores]);
    
    

    

    return(
        <>
        { isLoading ? 
            (<h2>Loading..</h2>) 
          : error ? 
            (<div>{error?.data?.message || error.error}</div>) 
          : (
            <>

            <div style={{height: '380px', backgroundColor: '#e4dccd', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                {(stores.stores).map((store) => {
                    return (
                        <>
                            <WindowAnimation store={store}/>
                        </>
                    )
                })}
            </div>

                <div style={{backgroundColor: '#f3efe7'}}>

                    <Container maxWidth="lg">
                        {
                            storeOverview.map((store, idx) => {
                                return (
                                    <>
                                        {(idx+1)%2!==0 ? 
                                            // <div style={{width: "100vw"}}>
                                                <>
                                                {StoresOverviewDisplay(store)}
                                                <Divider variant="middle" sx={{ flexGrow:1, paddingBottom: '10px'}} />
                                                </>
                                            // </div>
                                        : 
                                        StoresOverviewDisplay(store)
                                        }
                                    </>
                                )
                            })
                        }
                    

                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between", 
                    backgroundColor: "#F3EFE7",
                    flexDirection: "row",
                    padding: "20px",
                }}>
                    {count === 0 ? null :
                        <Typography component="div" 
                            onClick={() => clickHandler("decrease")}
                            sx ={{
                                fontSize:"15px",
                                display:"flex",
                                justifyContent:"flex-start",
                                color:"#99958C",
                            }}
                        >
                            <ArrowCircleLeftOutlinedIcon sx={arrowStyle}/>
                        </Typography>
                    }
                    <Box sx={{ flexGrow: 1 }}>  {/* <-- This ensures it takes up the maximum available space */}
                    </Box>
                    <Typography component="div"
                        onClick={() => clickHandler("increase")}
                        sx ={{
                            fontSize:"15px",
                            display:"flex",
                            justifyContent:"flex-end",
                            color:"#99958C",
                            '&:hover': {
                                cursor: "pointer",
                                color: "#414B3B"}
                        }}
                    >
                        discover more 
                        <ArrowCircleRightOutlinedIcon sx={arrowStyle}/>
                    </Typography>
                </Box>
                </Container>
            </div>
            </>
        )} 

        </>
    )
}
export default Home;