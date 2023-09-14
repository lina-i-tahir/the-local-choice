import { Typography } from "@mui/material";
const Error = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      sx={{
        display: "flex",
        justifyContent: "center",
        fontFamily: "Poppins",
        fontWeight: 500,
        color: "#414B3B",
        textDecoration: "none",
        margin: "300px 0px",
        fontSize: "26px",
        textAlign: "center",
      }}
    >
      Page not found
    </Typography>
  );
};

export default Error;
