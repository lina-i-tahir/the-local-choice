import { Grid, Card, CardMedia, CardContent, Link, Typography, circularProgressClasses} from "@mui/material"
import drawer from "../assets/drawer.png";
import hangingPlant from "../assets/hangingPlant.png";
import handxmadeLogo from "../assets/handxmadeLogo.png";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetStoreByIdQuery } from "../Slices/storeSlice";

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

    const { id } = useParams();
    const { data: currentStore, isLoading, error } = useGetStoreByIdQuery(id)

    const navigate = useNavigate();

    const viewProduct = (productId) => {
        navigate(`/stores/${id}/${productId}`)
    }

  return (
    <>  
    <ThemeProvider theme={theme}>
          { isLoading ? 
            (<h2>Loading..</h2>) 
          : error ? 
            (<div>{error?.data?.message || error.error}</div>) 
          : (
            <>
            <Grid container spacing={0}>
                <Grid item md={4} sx={{ display: { xs: 'none', md: 'inline' }}}>
                    <img src={hangingPlant} style={{ width: "250px"}}/>
                </Grid>
                <Grid item md={4} xs={12} style={{ justifyContent: 'center' }}>
                    <img src={currentStore.store.image} style={{ width: "250px"}}/>
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
                                            justifyContent: "center",
                                            }} >

              {(currentStore.store.products).map((product) => (
              <Card
              key={product._id}
              sx={{
                minWidth: 345,
                margin: "30px 15px",
                borderRadius: "10px",
                backgroundColor: "transparent",
                boxShadow: "none",
                outline: "none",
              }}
              onClick={() => viewProduct(product._id)}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{
                  objectFit: "contain",
                  width: "90%",
                  margin: "0 auto",
                }}
              />
              <CardContent>
                <Link key={product._id} to={`/products/${product._id}`}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      color: "#75695A",
                      textDecoration: "none",
                      margin: "0px",
                    }}
                  >
                  {product.name}
                  <br />
                  {product.price}
                  </Typography>
                </Link>
              </CardContent>
              </Card>
              ))}
            </Grid>
            </>
          )}

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