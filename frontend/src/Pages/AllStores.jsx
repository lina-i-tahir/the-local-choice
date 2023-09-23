import { Grid, Card, CardMedia, CircularProgress, Box} from "@mui/material"
import allStoresBanner from "../assets/allStoresImages/allStoresBanner.png";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useGetStoresQuery } from "../Slices/storeSlice";


const AllStores = () => {

    const navigate = useNavigate();

    const { data: stores, isLoading, error } = useGetStoresQuery()

    const enterStore = (storeId) => {
      navigate(`/stores/${storeId}`)
    }

  return (
    <>  
        <Grid container spacing={0} sx={{
                                        bgcolor: '#c8b799',
                                        }}>
            <Grid item md={12} sx={{ display: { xs: 'none', md: 'inline' }}}>
                <img src={allStoresBanner} style={{ width: "100%"}}/>
            </Grid>
        </Grid>
        
        <Grid
          container
          spacing={0}
          sx={{
            bgcolor: "#c8b799",
            justifyContent: "center",
            paddingLeft: "8%",
            paddingRight: "8%",
            paddingTop: "3%",
            paddingBottom: "3%",
          }}
        >                             
        { isLoading ? 
            (<h2>Loading..</h2>) 
          : error ? 
            (<div>{error?.data?.message || error.error}</div>) 
          : (
            <>
            {(stores.stores).map((store) => (
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
            ))}
            </>
          )}
        </Grid>
    </>
  )
}

export default AllStores