import {Typography} from '@mui/material';
import Sign from '../assets/tlc-landingPage/tlcSign.png';
import Plant from '../assets/tlc-landingPage/tlcPlant.png';
import Carpet from '../assets/tlc-landingPage/tlcCarpet.png';
import Door from '../assets/tlc-landingPage/tlcDoor.png';
import DoorCarpet from '../assets/tlc-landingPage/DoorCarpet.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return ( 
        <div style={{ minHeight: "100vh", width: "100%", margin: "0 auto", backgroundColor:"#F3EFE7", display:"flex", flexDirection:"row" , justifyContent:"center"}}>
            <Link to="/login" style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
                <div>
                    <img src={Plant} style={{width:"200px"}}/>
                </div>
            </Link>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <img src={DoorCarpet} style={{width:"400px"}}/>
            </div>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <img src={Sign} style={{width:"200px"}}/>
            </div>
        </div>
     );
}
 
export default LandingPage;