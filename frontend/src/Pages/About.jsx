import RouteHistory from "../Components/RouteHistory";
import { Container, Typography } from "@mui/material";

const About = () => {
    return (
        <>
        <div style={{ height: "85vh"}}>
            <RouteHistory page="about" routeName="about" />
            <Container>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    color: '#75695A',
                    margin: '20px 0',
                    fontSize: '26px',
                }}
            >
                About
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    color: '#75695A',
                    fontSize: '15px',
                }}
            >
                <b>THE LOCAL CHOICE</b> is a Singapore-based online pop-up market showcasing homegrown brands.
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    color: '#75695A',
                    margin: '20px 0',
                    fontSize: '15px',
                }}
            >
                Our goal is to provide a platform to connect and bring awareness to our vibrant local small businesses.
                With the support from our local community, we hope it will inspire more individuals to plant their seed and grow their ideas.
            </Typography>
            </Container>
        </div>
    </>
        
    );
}

export default About;
