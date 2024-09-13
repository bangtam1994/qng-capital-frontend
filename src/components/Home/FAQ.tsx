import React, { useRef } from "react";
import {
  Typography,
  Container,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";

import { motion, useAnimation } from "framer-motion";
import { faqData } from "../../utils/faq";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [inView, setInView] = React.useState<boolean>(false);
  const handleInView = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      setInView(true);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => handleInView(entry));
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);
  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <Container
      ref={ref}
      sx={{
        padding: "60px 0px",
        color: "black",
      }}
    >
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
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
        <Box margin={"60px 0px"}>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: "transparent",
                border: "none",
                "&:before": {
                  display: "none",
                },
                "&:first-of-type": {
                  borderTop: "1px solid #ccc",
                },
                "&:last-of-type": {
                  borderBottom: "1px solid #ccc",
                },
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
      </motion.div>
    </Container>
  );
};

export default FAQPage;
