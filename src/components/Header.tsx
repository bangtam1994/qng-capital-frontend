import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../assets/QNG_logo.svg";

import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import GradientButton from "./GradientButton";
import CloseIcon from "@mui/icons-material/Close";
import EbookIcon from "../assets/ebook_icon.png";
import MeIcon from "../assets/user.png";
import BgImage from "../assets/bg_hero.jpg";

import HomeIcon from "../assets/home.png";
import { LogoSvg } from "./LogoSvg";

interface Props {
  windowProp?: () => Window;
}
const pages = [
  { name: "Qui suis-je", to: "about-me", icon: MeIcon },
  { name: "E-Book Gratuit", to: "ebook/free", icon: EbookIcon },
];

const pagesMobile = [...pages, { name: "Accueil", to: "", icon: HomeIcon }];

const Header: React.FC = ({ windowProp }: Props) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const container =
    windowProp !== undefined ? () => windowProp().document.body : undefined;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageOpacity = Math.max(1 - scrollY / 200, 0);
  const colorOpacity = Math.min(scrollY / 200, 1);
  const colorLayerStyle = {
    backgroundColor: "rgb(34, 34, 34)", // Final color
    opacity: colorOpacity,
    transition: "opacity 0.5s ease",
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const imageLayerStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    opacity: imageOpacity,
    transition: "opacity 0.3s ease",
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  const navigate = useNavigate();
  return (
    <AppBar
      position="sticky"
      elevation={scrollY > 50 ? 4 : 0}
      style={{
        top: 0,
        overflow: "hidden",
      }}
    >
      <div style={imageLayerStyle}></div>
      <div style={colorLayerStyle}></div>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            "&:hover": {
              cursor: "pointer",
              color: theme.palette.secondary.main,
            },
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <LogoSvg />
          </Link>
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {pages.map((page) => {
            if (page.name === "E-Book Gratuit")
              return (
                <GradientButton
                  key={page.name}
                  onClick={() => navigate(page.to)}
                  sx={{
                    letterSpacing: ".2rem",
                    marginRight: "30px",
                  }}
                >
                  {t(page.name).toUpperCase()}
                </GradientButton>
              );
            else
              return (
                <Button
                  key={page.name}
                  onClick={() => navigate(page.to)}
                  sx={{
                    my: 2,
                    display: "block",
                    letterSpacing: ".2rem",
                    marginRight: "60px",
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  {t(page.name).toUpperCase()}
                </Button>
              );
          })}
        </Box>

        {/* MOBILE HEADER */}
        <Box
          sx={{
            display: {
              xs: "flex",
              md: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              position: "sticky",
            },
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { md: "none" },
              position: "fixed",
              left: 40,
              top: 20,
            }}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{
                height: 80,
                cursor: "none",
                color: "white",
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
                color: theme.palette.primary.contrastText,
              }}
            >
              QNG CAPITAL
            </Typography>
          </Link>

          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "100%",
                padding: "0px 30px",
                backgroundColor: "white",
              },
            }}
          >
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                color: "white",
              }}
            >
              <CloseIcon />
            </IconButton>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "5rem",
                height: "100%",
                gap: "2rem",
              }}
            >
              {pagesMobile.map((page) => (
                <ListItem
                  key={page.name}
                  disablePadding
                  onClick={() => {
                    navigate(page.to);
                    handleDrawerClose();
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <img src={page.icon} width={"40px"} height={"40px"} />
                    </ListItemIcon>
                    <ListItemText
                      primary={page.name}
                      primaryTypographyProps={{
                        style: {
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          marginLeft: "1.5rem",
                          letterSpacing: "2px",
                          textTransform: "uppercase",
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
