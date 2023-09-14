import { Container, Grid, Box, Hidden, Typography } from "@mui/material"
import Stack from '@mui/system/Stack';
import RouteHistory from "../Components/RouteHistory";
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SidePanel from "../Components/SidePanel";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TextField from '@mui/material/TextField';
import FieldDisabled from "../Components/FieldDisabled";

const Profile = () => {
    return ( 
        <>
            <Grid container spacing={0} style={{height: '80vh' }}>
                <SidePanel page={"profile"} route={"profile"}/>
                <Grid item xs={8.5} sx={{ backgroundColor: '#F8F5ED', margin:"30px 0px", borderRadius:"15px", flexGrow:"1"}}>
                    {/* <Typography gutterBottom variant="h6" component="div"
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: "20px",
                            margin: "10px 30px",
                            display: "flex",
                            justifyContent: "flex-start",
                        }}>
                        Profile
                    </Typography> */}
                    <Container maxWidth="sm" sx={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#E4DCCD", minWidth:"80%", minHeight:"70vh", margin:"40px auto", borderRadius:"10px"}}>
                        <Container maxWidth="sm" sx={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#F3EFE7", width:"60px", height:"60px", borderRadius:"50%", marginTop:"15px"}}>
                            <PersonOutlineIcon sx={{fontSize:"30px", color:"#645B4F"}}/>
                        </Container>
                        <FieldDisabled property={"first name"}/>
                        <FieldDisabled property={"last name"}/>
                        <FieldDisabled property={"email"}/>
                        <Container maxWidth="sm" sx={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"15px", width:"100%"}}>
                            <Typography variant="subtitle1" sx={{fontFamily: "Poppins", fontSize: "16px", width: "20%", textAlign: "right", color:"#99958C"}}>
                                address
                            </Typography>
                            <TextField
                                required
                                size="small"
                                variant="outlined"
                                defaultValue="Hello World"
                                placeholder="1234 Main St"
                                sx={{
                                    width:"60%",
                                    backgroundColor:"#F3EFE7",
                                    borderRadius:"5px",
                                    margin:"0px 20px",
                                    color: "#645B4F",
                                    borderColor: "#E4DCCD",
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#E4DCCD',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#E4DCCD',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#E4DCCD',
                                        },
                                    }
                                }}
                            />
                        </Container>
                        <Container maxWidth="sm" sx={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"15px", width:"100%"}}>
                            <Typography variant="subtitle1" sx={{fontFamily: "Poppins", fontSize: "16px", width: "20%", textAlign: "right", color:"#99958C"}}>
                                unit number
                            </Typography>
                            <TextField
                                required
                                size="small"
                                variant="outlined"
                                defaultValue="Hello World"
                                placeholder="#1-123"
                                sx={{
                                    width:"60%",
                                    backgroundColor:"#F3EFE7",
                                    borderRadius:"5px",
                                    margin:"0px 20px",
                                    color: "#645B4F",
                                    borderColor: "#E4DCCD",
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#E4DCCD',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#E4DCCD',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#E4DCCD',
                                        },
                                    }
                                }}
                            />
                        </Container>
                        <Container maxWidth="sm" sx={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"15px", width:"100%"}}>
                            <Typography variant="subtitle1" sx={{fontFamily: "Poppins", fontSize: "16px", width: "20%", textAlign: "right", color:"#99958C"}}>
                                postal code
                            </Typography>
                            <TextField
                                required
                                size="small"
                                variant="outlined"
                                defaultValue="Hello World"
                                placeholder="123456"
                                sx={{
                                    width:"60%",
                                    backgroundColor:"#F3EFE7",
                                    borderRadius:"5px",
                                    margin:"0px 20px",
                                    color: "#645B4F",
                                    borderColor: "#E4DCCD",
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#E4DCCD',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#E4DCCD',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#E4DCCD',
                                        },
                                    }
                                }}
                            />
                        </Container>
                        <Container maxWidth="sm" sx={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"15px", width:"100%"}}>
                            <Typography variant="subtitle1" sx={{fontFamily: "Poppins", fontSize: "16px", width: "20%", textAlign: "right", color:"#99958C"}}>
                                password
                            </Typography>
                            <TextField
                                required
                                size="small"
                                variant="outlined"
                                type="password"
                                defaultValue="1234"
                                sx={{
                                    width:"60%",
                                    backgroundColor:"#F3EFE7",
                                    borderRadius:"5px",
                                    margin:"0px 20px",
                                    color: "#645B4F",
                                    borderColor: "#E4DCCD",
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#E4DCCD',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#E4DCCD',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#E4DCCD',
                                        },
                                    }
                                }}
                            />
                        </Container>
                        <Button type="submit" variant="contained"
                            sx={{
                                display: "flex",
                                backgroundColor: "#99958C",
                                color: "#E4DCCD",
                                width: "50%",
                                textAlign: "center",
                                margin: "30px 0px 30px 0px",
                                '&:hover': {
                                    backgroundColor: "#737373",
                                },
                            }}
                        >
                            update profile
                        </Button>

                    </Container>
                    
                </Grid>
                
            
            </Grid>

        </>
     );
}
 
export default Profile;