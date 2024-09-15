import React, { useRef } from "react";
import { Container } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

interface SmoothWrapperProps {
  children: React.ReactNode;
}

const MotionWrapper: React.FC<SmoothWrapperProps> = ({ children }) => {
  const [inView, setInView] = React.useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

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
      { threshold: 0.4 }
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
        padding: "80px 0px",
        color: "black",
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
