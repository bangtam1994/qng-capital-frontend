import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
// import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PhonePic from "../../assets/2.svg";
import BgImage from "../../assets/bg_hero.jpg";
import theme from "../../theme/theme";
import GradientButton from "../GradientButton";
const Hero = () => {
  const { t } = useTranslation();
  // const theme = useTheme();
  const subtitles = [
    t("subtitle_message"),
    t("subtitle_message_2"),
    t("subtitle_message_3"),
  ];

  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      const offsetTop =
        pricingSection.getBoundingClientRect().top + window.pageYOffset - 100; // Adjust the offset (e.g., 100px)
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

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
        backgroundImage: `url(${BgImage})`,
        // backgroundColor: theme.palette.background.paper,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        py: { md: 6 },
        width: "100%",
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        alignItems: "center",
        position: { md: "relative", xs: "initial" },
        gap: "20px",
        height: { md: "80vh", xs: "auto" },
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
          color: "white",
        }}
      >
        <Box
          sx={{
            marginBottom: "20px",
            zIndex: 10000,
          }}
        >
          <Typography
            variant="h1"
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
            variant="h1"
            gutterBottom
            sx={{
              fontWeight: 600,
              fontStyle: "initial",
              lineHeight: 1.2,
              fontSize: { xs: "50px", md: "80px" },
              textAlign: { xs: "center" },
            }}
          >
            {t("welcome_message_next")}
          </Typography>
        </Box>
        <Typography
          variant="h5"
          color={theme.palette.primary.contrastText}
          sx={{
            marginBottom: "80px",
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: 15, md: 25 },
            width: "100%",
          }}
        >
          <motion.span
            key={currentSubtitleIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            // style={{ position: "absolute" }}
          >
            {subtitles[currentSubtitleIndex]}
          </motion.span>
        </Typography>
        <GradientButton
          variant="contained"
          color="primary"
          sx={{ margin: { xs: "0 auto", md: 0 } }}
          onClick={handleScrollToPricing}
          endIcon={<ChevronRightIcon />}
        >
          Découvrir les formations
        </GradientButton>
      </Box>

      <Box
        sx={{
          position: { md: "absolute", xs: "initial" },
          right: { md: 0, xs: 100 },
          top: "10%",
          zIndex: 9,
          height: { md: "80%", xs: 300 },
          width: { md: "50%" },
        }}
      >
        <img
          src={PhonePic}
          style={{
            boxSizing: "border-box",
            objectFit: "contain",
            width: "100%",
            height: "110%",
          }}
        />
        {/* <video autoPlay loop muted playsInline width="100%" height="100%">
          <source src={Video} type="video/mp4" />
        </video> */}
      </Box>
    </Box>
  );
};

export default Hero;
