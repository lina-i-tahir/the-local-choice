import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RouteHistory = (props) => {
    const routeStyle ={
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'ovo',
        fontWeight: 500,
        letterSpacing: '0.05rem',
        color: '#414B3B',
        fontSize:'15px',
        margin:"30px 5px",
        '&:hover': {
            color: "#737373"}
    }

    const home = localStorage.getItem('role') === 'user' ? '/home' : '/config/stores';

    return ( 
        <div style={{display:'flex'}}>
                <Link to={home} style={{textDecoration:"none"}}>
                    <Typography
                        variant="h7"
                        noWrap
                        style={{paddingLeft:"30px"}}
                        sx={routeStyle}>
                        home
                    </Typography>
                </Link>
                <Typography
                    variant="h7"
                    noWrap
                    sx={routeStyle}>
                    {">"}
                </Typography>

                <Link to={`/${props.routeName}`} style={{textDecoration:"none"}}>
                    <Typography
                        variant="h7"
                        noWrap
                        sx={routeStyle}>
                        {props.page}
                    </Typography>
                </Link>
            </div>
     );
}
 
export default RouteHistory;