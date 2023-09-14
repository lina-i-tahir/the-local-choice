import { Container, Grid, Box, Hidden, Typography } from "@mui/material"
import Stack from '@mui/system/Stack';
import RouteHistory from "../Components/RouteHistory";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SidePanel from "../Components/SidePanel";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Profile = () => {
    return ( 
        <>
            <Grid container spacing={0} style={{height: '80vh' }}>
                <SidePanel page={"profile"} route={"profile"}/>
                <Grid item xs={8.5} sx={{ backgroundColor: '#F8F5ED', margin:"30px 0px", borderRadius:"15px", flexGrow:"1"}}>
                    <Typography gutterBottom variant="h6" component="div"
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: "20px",
                            margin: "10px 30px",
                            display: "flex",
                            justifyContent: "flex-start",
                        }}>
                        Profile
                    </Typography>
                    <Container maxWidth="sm" sx={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#E4DCCD"}}>
                        <Container maxWidth="sm" sx={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#F3EFE7", width:"60px", height:"60px", borderRadius:"50%", marginTop:"15px"}}>
                            <PersonOutlineIcon sx={{fontSize:"30px", color:"#645B4F"}}/>
                        </Container>
                        <Container maxWidth="sm" sx={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"15px"}}>
                            <Typography gutterBottom variant="h6" component="div"
                                sx={{
                                    fontFamily: "Poppins",
                                    fontSize: "20px",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    color:"#99958C"
                                }}>
                                first name
                            </Typography>
                        </Container>
                    </Container>
                    
                </Grid>
                
            
            </Grid>

        </>
     );
}
 
export default Profile;