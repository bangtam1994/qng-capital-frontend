import React, { useRef, useState } from "react";
import { Box, Modal, Fade, Backdrop } from "@mui/material";

import { testimonials } from "../../utils/testimonials";
import MotionWrapper from "../MotionWrapper";
import Background from "../../assets/background_trading_3.png";
import Title from "../Title";
import Slider from "react-slick";

const TestimonialsBanner = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleOpen = (image: string) => {
    setActiveImage(image);
    setOpenModal(true);
  };

  const handleClose = () => {
    setActiveImage(null);
    setOpenModal(false);
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      ref={ref}
      id="testimonials-section"
      sx={{
        padding: { md: "60px 0px", xs: "80px 10px" },
        maxWidth: { md: "100vw" },
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src={Background}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
          zIndex: -1,
          backgroundColor: "black",
        }}
      />
      <MotionWrapper>
        <Title
          variant="h2"
          text="Témoignages"
          textColor="white"
          marginBottom={8}
        />

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <Box
              sx={{
                height: "100%",
                width: "100%",
                padding: "0.5rem",
                cursor: "pointer",
                "&:hover": { transform: "scale(1.05)" },
                transition: "transform 0.3s ease-in-out",
                textAlign: "center",
              }}
              onClick={() => handleOpen(testimonial.image)}
            >
              <Box
                component="img"
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                  borderRadius: "25px",
                }}
                alt={testimonial.image}
                src={`${import.meta.env.BASE_URL}${testimonial.image}`}
              />
            </Box>
          ))}
        </Slider>

        {/* Fullscreen Modal */}
        <Modal
          open={openModal}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={openModal}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { md: "50%", xs: "110%" },
                textAlign: "center",
              }}
            >
              {activeImage && (
                <img
                  src={activeImage}
                  alt="Fullscreen Testimonial"
                  style={{
                    maxWidth: "90%",
                    maxHeight: "90%",
                    borderRadius: "25px",
                  }}
                />
              )}
            </Box>
          </Fade>
        </Modal>
      </MotionWrapper>
    </Box>
  );
};

export default TestimonialsBanner;
