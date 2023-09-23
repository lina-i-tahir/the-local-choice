
import { Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const StoresOverviewDisplay = (store) => {
  return (
    <>  
            <Link to={`/stores/${store._id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <Typography gutterBottom variant="h6" component="div"
                sx={{
                    fontFamily: "Poppins",
                    fontSize: "20px",
                    margin: "10px 30px",
                    display: "flex",
                    justifyContent: "flex-start",
                    '&:hover': {
                        color: "#737373",
                        cursor: "pointer",
                    }
                }}>
                    {store.name}
            </Typography>
            </Link>
            
            <Grid container spacing={{ xs: 3, md: 2 }}>
                {store.products.map((item,idx) => (
                    idx<4 ?
                    <Grid item xs={3} key={idx}>
                    <Link to ={`/stores/${store._id}/${item._id}`} style={{ textDecoration: "none", color: "inherit" }}>

                        <img src={item.image} style={{ width: "80%", margin: "0px 30px" }} />
                        <Typography gutterBottom variant="h6" component="div"
                        sx ={{
                            fontFamily: "Poppins",
                            fontSize:"20px",
                            marginBottom:"5px",
                            display:"flex",
                            justifyContent:"center",
                        }}>
                        {item.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div"
                        sx ={{
                            fontFamily: "Poppins",
                            fontSize:"20px",
                            marginBottom:"5px",
                            display:"flex",
                            justifyContent:"center",
                        }}>
                        {item.price}
                        </Typography>
                    </Link>

                    </Grid>
                    : null
                ))}
            </Grid>
        </>
  )
}

export default StoresOverviewDisplay