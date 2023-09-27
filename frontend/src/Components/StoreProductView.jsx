import { Grid, Card, CardMedia, CardContent, Link, Typography } from "@mui/material"

const StoreProductView = (product) => {
  return (
    <>
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
            component="div"
            sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: '15px',
                fontWeight: 500,
                color: "primary.contrastText",
                textDecoration: "none",
                margin: "0px",
            }}
            >
            {product.name}
            </Typography>
        </Link>
            <Typography
                gutterBottom
                component="div"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: '12px',
                    fontWeight: 500,
                    color: "secondary.main",
                    textDecoration: "none",
                    margin: "0px",
                }}
                >   
            ${product.price.toFixed(2)}
            </Typography>
        </CardContent>
    </>
  )
}

export default StoreProductView