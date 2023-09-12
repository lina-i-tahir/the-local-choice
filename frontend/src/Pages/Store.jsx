import { Container, Grid, Box } from "@mui/material"
import drawer from "../assets/drawer.png";
import hangingPlant from "../assets/hangingPlant.png";
import handxmadeLogo from "../assets/handxmadeLogo.png";

const Store = () => {

  return (
    <>
    <section className="store-banner" style={{ display: "flex", flexDirection: "row", height: "280px", backgroundColor: "#e4dccd"}}>
        <Container maxWidth="xl">
            <img src={hangingPlant} style={{ width: "150px", margin: "0 12% 130px 0", justifyContent: "center"}}/>
            <img src={handxmadeLogo} style={{ width: "280px", justifyContent: "center"}}/>
            <img src={drawer} style={{ width: "150px", margin: "0 0 0 12%", justifyContent: "center"}}/>
        </Container>
    </section>
    <section className="store-products" style={{ display: "flex", flexDirection: "column", height: "1000px", backgroundColor: "#f3efe7"}}>
        <Grid>

        </Grid>
    </section>
    </>
  )
}

export default Store