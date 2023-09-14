// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logo from './Logo';

const pages = ['stores', 'about', 'contact'];
const settings = ['profile','orders', 'login', 'logout', 'signup'];
const stores = ["handfully","handxmade", ]

function NavBar() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  return (
    <AppBar position="static" sx ={{backgroundColor:"#F3EFE7", boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={`/${page}`} style={{textDecoration:"none"}}>
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'  } }}>
            {pages.map((page, idx) => (
              <Link to={`/${page}`} style={{textDecoration:"none"}}>
                <Typography
                  key={idx}
                  variant="h7"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'ovo',
                    fontWeight: 500,
                    color: '#414B3B',
                    textDecoration: 'none',
                    margin:'20px',
                    fontSize:'16px',
                  }}
                >
                  {/* {page} */}
                  {page === "stores" ? 
                  <span style={{display:"flex"}}>
                    {page}
                    <ArrowDropDownIcon sx={{margin:"3px 0px",fontSize:"15px"}} />
                  </span>
                  : `${page}`}
                </Typography>
              </Link>
            ))}
          </Box>
          
          {/* profile + cart*/}
          <Box sx={{ flexGrow: 0, margin:"0px 30px" }}>
            <Tooltip>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonOutlineIcon sx={{margin:"20px"}} />
              </IconButton>
              <IconButton>
                <ShoppingBagOutlinedIcon sx={{margin:"10px"}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '50px', ml: '-20px',
              '& .MuiPaper-root': {
                backgroundColor: '#EFE9DD'
              } }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link to={`/${setting}`} style={{textDecoration:"none"}}>
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{ width:"100px", justifyContent:"center", }}>
                  <Typography sx={{color:"#414B3B", fontSize:"14px", fontFamily:"ovo"}} >
                   {setting}
                  </Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;