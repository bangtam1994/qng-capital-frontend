import { Container, Box, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", padding: 10 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Contact
        </Typography>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Contact;
