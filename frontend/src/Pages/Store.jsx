import { Container, Grid, Box, Hidden } from "@mui/material"
import drawer from "../assets/drawer.png";
import hangingPlant from "../assets/hangingPlant.png";
import handxmadeLogo from "../assets/handxmadeLogo.png";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import acStickers from "../assets/productImages/acStickers.png"
import { useNavigate } from 'react-router-dom';

const Store = () => {

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

    const navigate = useNavigate();

    const handleClick = () => {
        const productId = 1;
        const storeId = 1;
        navigate(`/stores/${storeId}/${productId}`)
    }

  return (
    <>  
        <ThemeProvider theme={theme}>
        <Grid container spacing={0}>
            <Grid item md={4} sx={{ display: { xs: 'none', md: 'inline' }}}>
                <img src={hangingPlant} style={{ width: "250px"}}/>
            </Grid>
            <Grid item md={4} xs={12} style={{ justifyContent: 'center' }}>
                <img src={handxmadeLogo} style={{ width: "250px"}}/>
            </Grid>
            <Grid item md={4} sx={{ display: { xs: 'none', md: 'inline' }}}>
                <img src={drawer} style={{ width: "250px"}}/>
            </Grid>
        </Grid>

        <Grid container spacing={0} sx={{
                                        bgcolor: 'primary.light',
                                        p: 3,
                                        justifyContent: "flex-start",
                                        }} >
            <Grid item sx={{marginInlineStart: 7}}>
                Sort By : ____
            </Grid>
        </Grid>

        <Grid container rowSpacing={5} spacing={1} sx={{
                                        bgcolor: 'primary.light',
                                        paddingTop: 1,
                                        paddingLeft: 8,
                                        paddingRight: 8, 
                                        justifyContent: "flex-start",
                                        }} >
            <Grid item md={4} sm={6} xs={12}>
                <img src={acStickers} 
                    style={{ width: "62%"}}
                    onClick={handleClick}/>
                <h4 style={{ margin: '8px'}}
                    onClick={handleClick}>sticker pack</h4>
                <p style={{ margin: '8px'}}
                    onClick={handleClick}>$5.99</p>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <img src={acStickers} style={{ width: "62%"}}/>
                <h4 style={{ margin: '8px'}}>sticker pack</h4>
                <p style={{ margin: '8px'}}>$5.99</p>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <img src={acStickers} style={{ width: "62%"}}/>
                <h4 style={{ margin: '8px'}}>sticker pack</h4>
                <p style={{ margin: '8px'}}>$5.99</p>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <img src={acStickers} style={{ width: "62%"}}/>
                <h4 style={{ margin: '8px'}}>sticker pack</h4>
                <p style={{ margin: '8px'}}>$5.99</p>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <img src={acStickers} style={{ width: "62%"}}/>
                <h4 style={{ margin: '8px'}}>sticker pack</h4>
                <p style={{ margin: '8px'}}>$5.99</p>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <img src={acStickers} style={{ width: "62%"}}/>
                <h4 style={{ margin: '8px'}}>sticker pack</h4>
                <p style={{ margin: '8px'}}>$5.99</p>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <img src={acStickers} style={{ width: "62%"}}/>
                <h4 style={{ margin: '8px'}}>sticker pack</h4>
                <p style={{ margin: '8px'}}>$5.99</p>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <img src={acStickers} style={{ width: "62%"}}/>
                <h4 style={{ margin: '8px'}}>sticker pack</h4>
                <p style={{ margin: '8px'}}>$5.99</p>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <img src={acStickers} style={{ width: "62%"}}/>
                <h4 style={{ margin: '8px'}}>sticker pack</h4>
                <p style={{ margin: '8px'}}>$5.99</p>
            </Grid>
        </Grid>

        <Grid container spacing={0} sx={{
                                        bgcolor: 'primary.light',
                                        p: 5,
                                        paddingTop: 8,
                                        }} >
            <Grid item xs={2}>
                left
            </Grid>
            <Grid item xs={8}>
                PAGE 1 / 3
            </Grid>
            <Grid item xs={2}>
                right
            </Grid>
        </Grid>

    </ThemeProvider>
    </>
  )
}

export default Store