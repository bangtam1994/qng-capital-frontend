import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

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
          <IconButton color="primary" href="https://facebook.com">
            <Facebook />
          </IconButton>
          <IconButton color="primary" href="https://twitter.com">
            <Twitter />
          </IconButton>
          <IconButton color="primary" href="https://instagram.com">
            <Instagram />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
