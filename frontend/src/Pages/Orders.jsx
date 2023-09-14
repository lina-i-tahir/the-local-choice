import { Container, Grid, Box, Hidden } from "@mui/material"
import Stack from '@mui/system/Stack';
import RouteHistory from "../Components/RouteHistory";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

  
const Orders = () => {
  return (
    <>
        <Grid container spacing={0} style={{height: '80vh' }}>
            <Grid item xs={3.5} sx={{ display: { xs: 'none', md: 'inline' }}} style={{ backgroundColor: '#e4dccd', height: '80vh' }}>
                <RouteHistory page="orders" routeName="orders"/>
                <Stack 
                    direction={{ xs: 'column'}}
                    spacing={{ xs: 2}}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <h3>Hi, Mary</h3>
                    <Button 
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon />}
                        href="/orders"
                        sx ={{
                            backgroundColor:"#75695a",
                            boxShadow: "none",
                            minWidth: "200px",
                            minHeight: "50px",
                            '&:hover': {
                                backgroundColor: '#e4dccd',
                                color:"#75695a",
                                opacity: [0.9, 0.8, 0.7],
                            }
                        }}>
                    Orders
                    </Button>
                    <Button 
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon />}
                        href="/orders"
                        sx ={{
                            backgroundColor:"#75695a",
                            boxShadow: "none",
                            minWidth: "200px",
                            minHeight: "50px",
                            '&:hover': {
                                backgroundColor: '#e4dccd',
                                color:"#75695a",
                                opacity: [0.9, 0.8, 0.7],
                            }
                        }}>
                    Personal Data
                    </Button>
                    <Button 
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon />}
                        href="/orders"
                        sx ={{
                            backgroundColor:"#75695a",
                            boxShadow: "none",
                            minWidth: "200px",
                            minHeight: "50px",
                            '&:hover': {
                                backgroundColor: '#e4dccd',
                                color:"#75695a",
                                opacity: [0.9, 0.8, 0.7],
                            }
                        }}>
                    Sign Out
                    </Button>
                </Stack>
            </Grid>
            <Grid item xs={8.5} style={{ backgroundColor: '#f3efe7', height: '80vh' }}>
                <Stack 
                    direction={{ xs: 'column'}}
                    spacing={{ xs: 2}}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    p={5}
                >
                    <h3>orders</h3>
                    <Grid container 
                        spacing={0} 
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        style={{backgroundColor:'#e4dccd',
                                width:'90%'}}
                    >
                        <Grid item xs={3}>
                            <p>order number</p>
                            <p>43934</p>
                        </Grid>
                        <Grid item xs={3}>
                            <p>total</p>
                            <p>$38.80</p>
                        </Grid>
                        <Grid item xs={3}>
                            <p>status</p>
                            <p>shipped</p>
                        </Grid>
                        <Grid item xs={3}>
                            <Button 
                                variant="contained"
                                endIcon={<ArrowForwardIosIcon />}
                                href="/orders"
                                sx ={{
                                    backgroundColor:"#75695a",
                                    boxShadow: "none",
                                    '&:hover': {
                                        backgroundColor: '#e4dccd',
                                        color:"#75695a",
                                        opacity: [0.9, 0.8, 0.7],
                                    }
                            }}>
                            view order
                            </Button>
                        </Grid>
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
    </>
  )
}

export default Orders