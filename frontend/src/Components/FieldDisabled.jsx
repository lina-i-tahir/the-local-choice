import TextField from '@mui/material/TextField';
import { Container, Grid, Box, Hidden, Typography } from "@mui/material"

const FieldDisabled = (props) => {
    return ( 
        <Container maxWidth="sm" sx={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"15px", width:"100%"}}>
            <Typography variant="subtitle1" sx={{fontFamily: "Poppins", fontSize: "16px", width: "20%", textAlign: "right", color:"#99958C"}}>
                {props.property}
            </Typography>
            <TextField
                disabled
                size="small"
                variant="outlined"
                defaultValue="Hello World"
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
    );
}


 
export default FieldDisabled;