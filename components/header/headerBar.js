import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";

const pages = ["Customers", "Drivers", "For Business", "Contact Us"];

const HeaderBar = (props) => {
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [showAuth, setShowAuth] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const LogoutUser = () => {
    setAnchorElNav(null);
    setShowAuth(false);
    localStorage.removeItem("token");
    dispatch({
      type: "SET_UNAUTHORIZED",
    });
  };
  useEffect(() => {
    setShowAuth(props.authorized)
  }, [props.authorized]);

  return (
    <AppBar position="static" className="nav-bar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="header-logo"
            sx={{ mr: 10, display: { xs: "flex", md: "flex" } }}
          >
            <img src="/logo.svg" alt="Logo" className="logo" />
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {showAuth ? (
            <Button key={"signup"} sx={{ zIndex:"1", display: { xs: "none", md: "block" } }} className="darkbutton" onClick={LogoutUser}>
              Logout
            </Button>
          ) : (
            <Box
              sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
              className="login-buttons"
            >
              <Button key={"login"} onClick={handleCloseNavMenu}>
                Log In
              </Button>
              <Button
                key={"signup"}
                className="darkbutton"
                onClick={handleCloseNavMenu}
              >
                Sign Up
              </Button>
            </Box>
          )}

          <Box
            sx={{
              flexGrow: 0,
              display: {
                xs: "flex",
                md: "none",
                justifyContent: "space-between",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{ zIndex: "1" }}
              className="mobileMenu"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {showAuth ? (
                <MenuItem key={"user"} onClick={LogoutUser}>
                  Logout
                </MenuItem>
              ) : (
                <Box>
                  <MenuItem
                    key={"login"}
                    onClick={handleCloseNavMenu}
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    Log In
                  </MenuItem>
                  <MenuItem
                    key={"signup"}
                    onClick={handleCloseNavMenu}
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    Sign Up
                  </MenuItem>
                </Box>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderBar;
