import React from "react";
// import CenteredContainer from "../components/CustomContainer";
import { Outlet } from "react-router-dom";

import { Box, Container, Typography } from "@mui/material";

const Plans: React.FC = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", padding: 10 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Nos offres
        </Typography>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Plans;
