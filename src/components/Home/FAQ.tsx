import React from "react";
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
} from "@mui/material";

import { faqData } from "../../utils/faq";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MotionWrapper from "../MotionWrapper";
import Title from "../Title";

const GradientAccordion = styled(Accordion)<{
  isFirst?: boolean;
  isLast?: boolean;
}>(() => ({
  background:
    "linear-gradient(90deg, rgba(41,2,215,1) 0%, rgba(63,0,163,1) 0%, rgba(0,148,131,1) 58%, rgba(30,166,114,1) 100%, rgba(138,196,246,1) 100%);",
  borderRadius: "5px",
  border: "none",
  transition: "background-color 0.3s ease",

  "&:before": {
    display: "none",
  },
  "& + &": {
    marginTop: "3rem",
  },
}));

const GradientAccordionSummary = styled(AccordionSummary)(
  ({ expanded }: { expanded?: boolean }) => ({
    backgroundColor: expanded ? "transparent" : "transparent",
    color: expanded ? "transparent" : "white",
    transition: "color 0.3s ease, background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "transparent",
    },
  })
);

const TitleTypography = styled(Typography)(
  ({ expanded }: { expanded?: boolean }) => ({
    color: expanded ? "transparent" : "white",
    background: expanded ? "#0F1832" : "none",
    WebkitBackgroundClip: expanded ? "text" : "none",
    backgroundClip: expanded ? "text" : "none",
    transition: "color 0.3s ease, background 0.3s ease",
    padding: "0.7rem",
  })
);

const FAQPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0F1832",
        py: { md: 6, xs: 7 },
        width: "100%",
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        alignItems: "center",
        position: { md: "relative", xs: "initial" },
        gap: "20px",
      }}
    >
      <MotionWrapper>
        <Typography
          variant="h1"
          align="center"
          fontWeight={700}
          gutterBottom
          color={"rgb(230, 230, 230)"}
          lineHeight={"1.3em"}
          fontSize={70}
          zIndex={99}
        >
          FAQ
        </Typography>
        <Title
          text="Les questions les plus fréquentes"
          align="center"
          marginTop={"-70px"}
          fontSize={36}
          fontWeight={700}
          lineHeight={"1.3em"}
          zIndex={10000000}
        />

        <Box margin={"80px 0px"}>
          {faqData.map((faq, index) => (
            <GradientAccordion key={index} isFirst={index === 0}>
              <GradientAccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <TitleTypography expanded={false}>
                  {faq.question}
                </TitleTypography>
              </GradientAccordionSummary>
              <AccordionDetails
                sx={{ backgroundColor: "#0F1832", boxShadow: "none" }}
              >
                <Typography variant="h6" sx={{ color: "white" }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </GradientAccordion>
          ))}
        </Box>
      </MotionWrapper>
    </Box>
  );
};

export default FAQPage;
