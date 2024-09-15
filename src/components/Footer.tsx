import React from "react";
import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import { YouTube, Telegram, Instagram } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: "center",
        borderTop: "1px solid #ddd",
        mt: "auto",
      }}
    >
      <Container>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} QNG Capital. All rights reserved.
        </Typography>
        <Box sx={{ mt: 1 }}>
          <IconButton
            color="primary"
            onClick={() => window.open("https://www.youtube.com/@QngCapital")}
          >
            <YouTube />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => window.open("https://t.me/qngcapital")}
          >
            <Telegram />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => window.open("https://www.instagram.com/qngcapital")}
          >
            <Instagram />
          </IconButton>
        </Box>
        <Link href="/terms-of-service" color="inherit" underline="none">
          <Typography variant="body2" color="text.secondary">
            Conditions Générales
          </Typography>
        </Link>
        <Link href="/privacy-policy" color="inherit" underline="none">
          <Typography variant="body2" color="text.secondary">
            Politique de confidentialité
          </Typography>
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;
