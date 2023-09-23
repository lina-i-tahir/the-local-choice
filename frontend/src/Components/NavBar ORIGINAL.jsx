// import * as React from 'react';
import { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";

import { Button, Divider } from "@mui/material";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "./Logo";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Notification from "./Notification";
import { CartContext } from "../CardContext";
import CartProduct from "./CartProduct";

import { useSelector } from "react-redux";

var pages = ["stores", "about", "contact"];
var settings = ["profile", "orders", "login", "logout", "signup"];

const stores = ["handfully", "handxmade"];

// Shopping cart Modal style
const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#F3EFE7",
  border: "2px solid #000",

  boxShadow: 24,
  p: 4,
};

function NavBar() {
  // notification
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");

  if (localStorage.getItem("role") === "admin") {
    settings = ["login", "logout"];
    pages = ["config"];
  } else {
    settings = ["profile", "orders", "login", "logout", "signup"];
    pages = ["stores", "about", "contact"];
  }

  // handle close snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Shopping cart Modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleLogoutClick = () => {
    handleCloseUserMenu();
    postLogout();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    settings = ["profile", "orders", "login", "logout", "signup"];
    pages = ["stores", "about", "contact"];
    navigate("/login");
    window.location.reload();
  };

  // Shopping cart Modal Badge
  const { cartItems } = useSelector((state) => state.cart)
  console.log("cart items", cartItems)

  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const postLogout = async () => {
    await axios({
      method: "POST",
      url: "http://localhost:8000/logout",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("Logged out successfully");
          setSnackbarSeverity("success");
          setOpenSnackbar(true);
          setSnackbarMessage("Logged out successfully");
          setTimeout(() => {
            handleLogout();
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
        setSnackbarMessage("Logout failed");
      });
    }

    // Go to Checkout - on Click

    const goToCartPage = () => {
      navigate(`/checkout`);
      setOpenModal(false);
    };

    return (
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#F3EFE7",
          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#414B3B"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) =>
                  page === "config" ? (
                    <Link
                      to={`/${page}/stores`}
                      style={{ textDecoration: "none" }}
                    >
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </Link>
                  ) : (
                    <Link to={`/${page}`} style={{ textDecoration: "none" }}>
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </Link>
                  )
                )}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, idx) =>
                page === "config" ? (
                  <Link
                    to={`/${page}/stores`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      key={idx}
                      variant="h7"
                      noWrap
                      sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontWeight: 400,
                        color: "#414B3B",
                        textDecoration: "none",
                        margin: "20px",
                      }}
                    >
                      {page}
                    </Typography>
                  </Link>
                ) : (
                  <Link to={`/${page}`} style={{ textDecoration: "none" }}>
                    <Typography
                      key={idx}
                      variant="h7"
                      noWrap
                      sx={{
                        mr: 2,
                        display: { xs: "none", md: "flex" },
                        fontWeight: 400,
                        color: "#414B3B",
                        textDecoration: "none",
                        margin: "20px",
                      }}
                    >
                      {page}
                    </Typography>
                  </Link>
                )
              )}

              {/* {page} */}
              {/* {page === "stores" ? (
                    <span style={{ display: "flex" }}>
                      {page}
                      <ArrowDropDownIcon
                        sx={{ margin: "3px 0px", fontSize: "15px" }}
                      />
                    </span>
                  ) : (
                    `${page}`
                  )}
                </Typography>
              </Link>
              ) */}
            </Box>

            {/* profile + cart*/}
            <Box sx={{ flexGrow: 0, margin: "0px 30px" }}>
              <Tooltip>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <PersonOutlineIcon sx={{ margin: "20px" }} />
                </IconButton>
                <Badge
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  badgeContent={productsCount}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "414B3B",
                      backgroundColor: "#414B3B",
                      margin: "20px",
                    },
                  }}
                >
                  <IconButton>
                    <ShoppingBagOutlinedIcon
                      onClick={handleOpenModal}
                      sx={{ margin: "10px" }}
                    />

                    <Modal
                      open={openModal}
                      onClose={handleCloseModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={styleModal}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                          fontFamily="Poppins"
                          fontWeight="400"
                          color="#414B3B"
                        >
                          your shopping cart
                        </Typography>

                        <Container>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                            variant="h7"
                            fontFamily="Poppins"
                            fontWeight="200"
                            color="#414B3B"
                          >
                            <br />
                            {productsCount > 0 ? (
                              <>
                                {/* <p>items in your cart</p> */}
                                {cart.items.map((currentProduct, idx) => (
                                  <CartProduct
                                    key={idx}
                                    storeId={currentProduct.storeId}
                                    productId={currentProduct.productId}
                                    quantity={currentProduct.quantity}
                                  ></CartProduct>
                                ))}
                                {/* <h4>total: $ {cart.getTotalCost().toFixed(2)}</h4> */}
                                <br />
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={goToCartPage}
                                  sx={{
                                    display: "flex",
                                    backgroundColor: "#99958C",
                                    color: "#E4DCCD",
                                    width: "20ch",
                                    textAlign: "center",
                                    margin: "0px 0px 0px 100px",
                                    padding: "18px",
                                    "&:hover": {
                                      backgroundColor: "#737373",
                                    },
                                  }}
                                >
                                  checkout ${cart.getTotalCost().toFixed(2)}
                                </Button>
                              </>
                            ) : (
                              <h4> add our awesome items to your cart!</h4>
                            )}
                          </Typography>
                        </Container>
                      </Box>
                    </Modal>
                  </IconButton>
                </Badge>
              </Tooltip>

              <Menu
                sx={{
                  mt: "50px",
                  ml: "-20px",
                  "& .MuiPaper-root": {
                    backgroundColor: "#EFE9DD",
                  },
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) =>
                  setting === "logout" ? (
                    <MenuItem
                      key={setting}
                      onClick={handleLogoutClick}
                      sx={{ width: "100px", justifyContent: "center" }}
                    >
                      <Typography
                        sx={{
                          color: "#414B3B",
                          fontSize: "14px",
                          fontFamily: "ovo",
                        }}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ) : (
                    <Link to={`/${setting}`} style={{ textDecoration: "none" }}>
                      <MenuItem
                        key={setting}
                        onClick={handleCloseUserMenu}
                        sx={{ width: "100px", justifyContent: "center" }}
                      >
                        <Typography
                          sx={{
                            color: "#414B3B",
                            fontSize: "14px",
                            fontFamily: "ovo",
                          }}
                        >
                          {setting}
                        </Typography>
                      </MenuItem>
                    </Link>
                  )
                )}
              </Menu>
            </Box>
          </Toolbar>
          <Notification
            openSnackbar={openSnackbar}
            handleCloseSnackbar={handleCloseSnackbar}
            snackbarMessage={snackbarMessage}
            snackbarSeverity={snackbarSeverity}
            vertical="bottom"
            horizontal="right"
          />
        </Container>
      </AppBar>
    );
  };
export default NavBar;
