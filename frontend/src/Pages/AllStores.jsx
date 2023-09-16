import { Container, Grid, Box, Hidden } from "@mui/material"
import allStoresBanner from "../assets/allStoresImages/allStoresBanner.png";
import storeWindow from "../assets/allStoresImages/storeWindow.png";
import storeHandxmade from "../assets/allStoresImages/storeHandxmade.png";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AllStores = () => {
    const theme = createTheme({
        palette: {
          primary: {
            light: '#f3efe7',
            main: '#e4dccd',
            dark: '#ebdec5',
            contrastText: '#75695a',
          },
          secondary: {
            light: '#414b3b',
            main: '#99958c',
            dark: '#737373',
            contrastText: '#fff',
          },
        },
      });

    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleMouseOut = () => {
        setHovered(false);
    };


    const navigate = useNavigate();

    const handleClick = () => {
        const storeId = 1;
        navigate(`/stores/${storeId}`)
    }

  return (
    <>  
        <ThemeProvider theme={theme}>
        <Grid container spacing={0} sx={{
                                        bgcolor: '#c8b799',
                                        }}>
            <Grid item md={12} sx={{ display: { xs: 'none', md: 'inline' }}}>
                <img src={allStoresBanner} style={{ width: "100%"}}/>
            </Grid>
        </Grid>

        <Grid container spacing={0} sx={{
                                        bgcolor: '#c8b799',
                                        justifyContent: "center",
                                        paddingLeft: "12%",
                                        paddingRight: "12%",
                                        paddingTop: "3%",
                                        paddingBottom: "3%"
                                        }} >
            <Grid item md={6}>
                <img src={hovered ? storeHandxmade : storeWindow} 
                    style={{ width: "250px"}}
                    onMouseEnter={handleHover}
                    onMouseOut={handleMouseOut}
                    onClick={handleClick}
                    />
            </Grid>
            <Grid item md={6}>
                <img src={storeWindow} style={{ width: "250px"}}/>
            </Grid>
            <Grid item md={6}>
                <img src={storeWindow} style={{ width: "250px"}}/>
            </Grid>
            <Grid item md={6}>
                <img src={storeWindow} style={{ width: "250px"}}/>
            </Grid>
        </Grid>
        {/* sx={{marginInlineStart: 7}} */}


    </ThemeProvider>
    </>
  )
}

export default AllStores