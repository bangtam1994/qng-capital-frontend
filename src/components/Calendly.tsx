import React from "react";
import { InlineWidget } from "react-calendly";
import { Box } from "@mui/material";

interface CalendlyEmbedProps {
  url: string;
}

const Calendly: React.FC<CalendlyEmbedProps> = ({ url }) => {
  return (
    <Box sx={{ width: "100%", height: "600px" }}>
      <InlineWidget url={url} styles={{ height: "100%" }} />
    </Box>
  );
};

export default Calendly;
