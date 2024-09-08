import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
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
      </Container>
    </Box>
  );
};

export default Footer;
