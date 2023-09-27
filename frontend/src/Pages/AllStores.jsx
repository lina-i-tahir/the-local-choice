import { Grid, Card, CardMedia, CircularProgress, Box} from "@mui/material"
import allStoresBanner from "../assets/allStoresImages/allStoresBanner.png";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useGetStoresQuery } from "../Slices/storeSlice";
import WindowAnimation from "../Components/WindowAnimation";
import { handleExpire } from "../utils/logoutUtils";
import { useState, useEffect } from "react";
import Notification from "../Components/Notification";
import Loading from "../Components/Loading";

const AllStores = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');  
    const { data: stores, isLoading, error } = useGetStoresQuery(token)

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("");
    
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const enterStore = (storeId) => {
      navigate(`/stores/${storeId}`)
    }

    useEffect(() => {
      if (error?.status === 401) {
          console.log("401 error");
          setOpenSnackbar(true);
          setSnackbarMessage("Please login or create an account to view this page!");
          setSnackbarSeverity("error");
          handleExpire();
          setTimeout(() => {
              navigate("/login");
              window.location.reload();
          }
          ,3000);
      }
    }, [error]);

  return (
    <Box sx={{ height: '85vh', bgcolor: 'primary.main'}}>
        <Grid container justifyContent="center"
                        alignItems="center"
                          spacing={0} 
                          sx={{
                                bgcolor: '#aca599',
                                }}>
            <Grid item md={12} >

            </Grid>
        </Grid>
        
        <Grid
          container
          spacing={0}
          sx={{
            justifyContent: "center",
            paddingLeft: "8%",
            paddingRight: "8%",
            paddingTop: "3%",
            paddingBottom: "3%",
          }}
        >                             
        { isLoading ? 
            <Loading bgColor="primary.dark"/>
          : error ? 
            <Notification openSnackbar={openSnackbar} handleCloseSnackbar={handleCloseSnackbar} snackbarMessage={snackbarMessage} snackbarSeverity={snackbarSeverity} vertical="bottom" horizontal="right"/>
          : (
            <>
            {(stores.stores).map((store) => {
                    return (
                        <>
                            <WindowAnimation store={store}/>
                        </>
                    )
                })}
            {/* {(stores.stores).map((store) => (
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
              height="75"
              image={store.image}
              alt={store.name}
              sx={{
                objectFit: "contain",
              }}
            />
            </Card>
            ))} */}
            </>
          )}
        </Grid>
    </Box>
  )
}

export default AllStores