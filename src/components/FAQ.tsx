import React from "react";
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MotionWrapper from "./MotionWrapper";
import Title from "./Title";
import theme from "../theme/theme";

export const GradientAccordion = styled(Accordion)<{
  isFirst?: boolean;
  isLast?: boolean;
}>(() => ({
  background: theme.palette.primary.main,
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

export const GradientAccordionSummary = styled(AccordionSummary)(
  ({ expanded }: { expanded?: boolean }) => ({
    backgroundColor: expanded ? "transparent" : "transparent",
    color: expanded ? "transparent" : "white",
    transition: "color 0.3s ease, background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "transparent",
    },
  })
);

export const TitleTypography = styled(Typography)(
  ({ expanded }: { expanded?: boolean }) => ({
    color: expanded ? "transparent" : "white",
    background: expanded ? "#0F1832" : "none",
    WebkitBackgroundClip: expanded ? "text" : "none",
    backgroundClip: expanded ? "text" : "none",
    transition: "color 0.3s ease, background 0.3s ease",
    padding: "0.7rem",
  })
);

interface FAQProps {
  data: { question: string; response: string }[];
  isHomepage?: boolean;
}

const FAQPage = ({ data, isHomepage = false }: FAQProps) => {
  return (
    <Box
      sx={{
        backgroundColor: isHomepage ? "rgb(34, 34, 34)" : "none",
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
          color={isHomepage ? "rgb(230, 230, 230)" : "textPrimary"}
          lineHeight={"1.3em"}
          fontSize={70}
          zIndex={99}
        >
          FAQ
        </Typography>

        <Title
          text="Les questions les plus fréquentes"
          align="center"
          fontSize={36}
          fontWeight={700}
          lineHeight={"1.3em"}
          zIndex={10000000}
          textColor="radial-gradient(circle, rgba(201,102,255,1) 0%, rgba(139,40,204,0.9836309523809523) 31%, rgba(3,86,140,1) 100%, rgba(0,107,230,1) 100%)"
        />

        <Box margin={"80px 0px"}>
          {data.map((faq, index) => (
            <GradientAccordion key={index} isFirst={index === 0}>
              <GradientAccordionSummary
                expandIcon={<ExpandMoreIcon color="secondary" />}
                aria-controls={`panel${index + 1}-content`}
                id={`panel${index + 1}-header`}
              >
                <TitleTypography expanded={false}>
                  {faq.question}
                </TitleTypography>
              </GradientAccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: isHomepage ? "rgb(34, 34, 34)" : "white",
                  boxShadow: "none",
                  padding: "30px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: isHomepage ? "white" : "black" }}
                >
                  {faq.response}
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
