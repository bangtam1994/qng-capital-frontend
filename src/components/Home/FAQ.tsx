import React from "react";
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";

import { faqData } from "../../utils/faq";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MotionWrapper from "../MotionWrapper";

const FAQPage = () => {
  return (
    <MotionWrapper>
      <Typography
        variant="h1"
        align="center"
        fontWeight={700}
        gutterBottom
        color={"rgb(230, 230, 230)"}
        lineHeight={"1.3em"}
        fontSize={70}
      >
        FAQ
      </Typography>
      <Typography
        align="center"
        marginTop={"-70px"}
        fontSize={36}
        fontWeight={700}
        lineHeight={"1.3em"}
      >
        Les questions les plus fréquentes
      </Typography>
      <Box margin={"80px 0px"}>
        {faqData.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "transparent",
              marginBottom: 8,
              border: "none",
              "&:before": {
                display: "none",
              },
              "&:last-of-type": {
                borderBottom: "1px solid #ccc",
              },
              boxShadow: "0 4px 12px rgba(0.1, 0.1, 0.1, 0.1)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </MotionWrapper>
  );
};

export default FAQPage;
