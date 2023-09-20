import { Grid, Card, CardMedia} from "@mui/material"
import allStoresBanner from "../assets/allStoresImages/allStoresBanner.png";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
// import store from "../store";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FaStoreSlash } from "react-icons/fa";

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


    const navigate = useNavigate();

    const [stores, setStores] = useState([]);

    const getStore = async () => {
      await axios({
          method: "GET",
          url: `http://localhost:8000/stores`,
      })
      .then((response) => {
          console.log(response.data.stores);
          setStores(response.data.stores);
      })
      .catch((error) => {
          console.log(error);
      });
    }
    
    useEffect(() => {
        getStore();
    }, []);

    const displayStore = stores.map((store) => {
        return (
          <Card
            key={store._id}
            sx={{
              minWidth: 300,
              margin: "30px 15px",
              backgroundColor: "transparent",
              boxShadow: "none", 
              outline: "none", 
            }}
            onClick={() => enterStore(store._id)}
          >
            <CardMedia
              component="img"
              height="220"
              image={store.image}
              alt={store.name}
              sx={{
                objectFit: "contain",
              }}
              
            />
          </Card>
        );
    });

    const enterStore = (storeId) => {
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
                                        paddingLeft: "8%",
                                        paddingRight: "8%",
                                        paddingTop: "3%",
                                        paddingBottom: "3%"
                                        }} >
        {displayStore}
        </Grid>


    </ThemeProvider>
    </>
  )
}

export default AllStores