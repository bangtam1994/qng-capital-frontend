import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        py: 6,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontStyle: "initial",
            lineHeight: 1.2,
            fontSize: "80px",
            marginBottom: "10px",
          }}
        >
          {t("welcome_message")}
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 400,
            lineHeight: 1.2,
            fontSize: "60px",
            textAlign: "left",
          }}
        >
          {t("welcome_message_next")}
        </Typography>
      </Box>
      <Typography
        variant="h5"
        color="textSecondary"
        sx={{ marginBottom: "50px" }}
      >
        {t("subtitle_message")}
      </Typography>
      <Button variant="contained" color="primary">
        Découvrir les formations
      </Button>
    </Box>
  );
};

export default Hero;
