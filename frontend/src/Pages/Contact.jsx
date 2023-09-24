import RouteHistory from "../Components/RouteHistory";
import { Typography } from "@mui/material";

const Contact = () => {
    return ( 
        <>
            <RouteHistory page="contact" routeName="contact" />
            <div style={{ minHeight: "100vh", width: "60%", margin: "0 auto" }}>
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
                Contact
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
                For enquiries and collaborations, drop us an email at <u>hi@thelocalchoice.com</u>
            </Typography>
            </div>
        </>
     );
}
 
export default Contact;