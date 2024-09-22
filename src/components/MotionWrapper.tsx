import React from "react";
import { Container } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SmoothWrapperProps {
  children: React.ReactNode;
}

const MotionWrapper: React.FC<SmoothWrapperProps> = ({ children }) => {
  // const [inView, setInView] = React.useState<boolean>(false);

  // const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this threshold if needed
    triggerOnce: false, // Set to true if you want it to trigger only once
  });
  // const handleInView = (entry: IntersectionObserverEntry) => {
  //   if (entry.isIntersecting) {
  //     setInView(true);
  //   }
  // };

  // React.useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => handleInView(entry));
  //     },
  //     { threshold: 0.4 }
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => {
  //     if (ref.current) {
  //       // eslint-disable-next-line react-hooks/exhaustive-deps
  //       observer.unobserve(ref.current);
  //     }
  //   };
  // }, []);
  React.useEffect(() => {
    console.log("InView:", inView);

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
        color: "black",
        padding: { xs: "15px", md: "80px 0px" },
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
