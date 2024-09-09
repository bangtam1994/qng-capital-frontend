import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import HeroBack from "../../assets/hero_back.png";
import CustomButton from "../Button";

const Hero = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const subtitles = [
    t("subtitle_message"),
    t("subtitle_message_2"),
    t("subtitle_message_3"),
  ];
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSubtitleIndex(
        (prevIndex) => (prevIndex + 1) % subtitles.length
      );
    }, 2000);
    return () => clearInterval(intervalId);
  }, [subtitles.length]);
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        py: 6,
        width: "100%",
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        alignItems: "center",
        position: { md: "relative", xs: "initial" },
        gap: "20px",
        height: { md: "70vh", xs: "auto" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          textAlign: { xs: "center", md: "start" },
          padding: { md: "150px 80px", xs: "40px 40px" },
          zIndex: 1000,
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
              fontWeight: 400,
              lineHeight: 1.2,
              fontSize: "60px",
              marginBottom: "10px",
            }}
          >
            {t("welcome_message")}
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontStyle: "initial",
              lineHeight: 1.2,
              fontSize: "80px",
              textAlign: { xs: "center" },
            }}
          >
            {t("welcome_message_next")}
          </Typography>
        </Box>
        <Typography
          variant="h5"
          color="textSecondary"
          sx={{
            marginBottom: "80px",
            textAlign: { xs: "center" },
            fontSize: { xs: "15px", md: 25 },
          }}
        >
          <motion.span
            key={currentSubtitleIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute" }}
          >
            {subtitles[currentSubtitleIndex]}
          </motion.span>
        </Typography>
        <CustomButton
          variant="contained"
          color="primary"
          sx={{ margin: { xs: "0 auto", md: 0 } }}
        >
          Découvrir les formations
        </CustomButton>
      </Box>

      <Box
        sx={{
          position: { md: "absolute", xs: "relative" },
          right: { md: 0, xs: 100 },
          top: 0,
          zIndex: 1,
          height: { md: 600, xs: 300 },
        }}
      >
        <img
          src={HeroBack}
          alt="Logo"
          style={{
            height: "100%",
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
