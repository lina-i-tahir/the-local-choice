import { Container, Grid, Box, Hidden } from "@mui/material"
import Stack from '@mui/system/Stack';
import RouteHistory from "../Components/RouteHistory";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SidePanel = (props) => {
    return ( 
        <Grid item xs={3.5} sx={{ display: { xs: 'none', md: 'inline' }}} style={{ backgroundColor: '#e4dccd', height: '80vh' }}>
                <RouteHistory page={props.page} routeName={props.route}/>
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
     );
}
 
export default SidePanel;