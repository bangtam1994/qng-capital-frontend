import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../assets/QNG_logo.svg";
import { useTheme } from "@mui/material/styles";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const pages = ["courses", "testimony", "contact"];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <img
                src={Logo}
                alt="Logo"
                style={{
                  height: 80,
                }}
              />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: theme.palette.primary.main,
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              QNG CAPITAL
            </Typography>
          </Link>
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => navigate(page)}
              sx={{
                my: 2,
                display: "block",
                letterSpacing: ".2rem",
                marginRight: "50px",
              }}
            >
              {t(page).toUpperCase()}
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "flex",
              md: "none",
              display: "flex",
              alignItems: "center",
            },
          }}
          onClick={handleOpenNavMenu}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{
              height: 80,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
          >
            QNG CAPITAL
          </Typography>
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
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={() => navigate(page)}>
                <Typography sx={{ textAlign: "center" }}>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
