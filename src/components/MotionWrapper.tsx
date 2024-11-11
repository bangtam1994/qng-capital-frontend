import React from "react";
import { Breakpoint, Container } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SmoothWrapperProps {
  children: React.ReactNode;
  maxWidth?: false | Breakpoint | undefined;
}

const MotionWrapper: React.FC<SmoothWrapperProps> = ({
  children,
  maxWidth,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

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
      maxWidth={maxWidth}
      sx={{
        color: "black",
        padding: { xs: "15px", md: "80px 0px" },
        border: "0px solid",
      }}
    >
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        {children}
      </motion.div>
    </Container>
  );
};

export default MotionWrapper;
