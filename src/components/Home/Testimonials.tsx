import { Box, CardContent, styled, Typography } from "@mui/material";
import { testimonials } from "../../utils/testimonials";
import Slider from "react-slick";
import MotionWrapper from "../MotionWrapper";
import { useState } from "react";

const TestimonialsCarousel: React.FC = () => {
  const [clickedCardId, setClickedCardId] = useState<number | null>(null);
  const handleClick = (id: number) => {
    setClickedCardId((prevId) => (prevId === id ? null : id));
  };

  const settings = {
    dots: true,
    infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,

    // zIndex: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // beforeChange: () => {
    //   if (clickedCardId !== null) {
    //     return false; // Prevent the slider from changing
    //   }
    // },
    // pauseOnHover: true,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 700,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    // ],
  };

  return (
    <MotionWrapper>
      <Typography
        variant="h1"
        align="center"
        fontWeight={700}
        gutterBottom
        color={"rgb(230, 230, 230)"}
        lineHeight={"1.3em"}
        sx={{ fontSize: { xs: 50, md: 70 } }}
      >
        Témoignages
      </Typography>
      <Typography
        align="center"
        marginTop={{ md: "-70px", xs: "-40px" }}
        fontSize={36}
        fontWeight={700}
        lineHeight={"1.3em"}
      >
        élèves
      </Typography>
      <Box margin={"80px 0px"}>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <Box
              key={testimonial.id}
              sx={{
                px: 2,
                width: "100%",
                // backgroundColor: "blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // height: { md: "480px", xs: "400px" },
                height: { md: "600px", xs: "400px" },
                // width: { md: "500px", xs: "200px" },
                // zIndex: 1000,
              }}
            >
              <StyledCard
                key={testimonial.id}
                expanded={clickedCardId === testimonial.id}
                onClick={() => handleClick(testimonial.id)}
                onMouseLeave={() => clickedCardId && setClickedCardId(null)}
                sx={{
                  height: { md: "450px", xs: "300px" },
                  maxWidth: { md: "600px", xs: "300px" },
                  margin: "auto",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "0.5rem",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" component="div" gutterBottom>
                    {testimonial.name}
                  </Typography>

                  <Box
                    component="img"
                    sx={{
                      height: "100%",
                      width: "100%",
                      maxHeight: { md: "350px", xs: "200px" },
                      maxWidth: { md: "400px", xs: "200px" },
                      objectFit: "contain",
                      objectPosition: "center",
                      borderRadius: "10px",
                    }}
                    alt={testimonial.image}
                    src={`${import.meta.env.BASE_URL}${testimonial.image}`}
                  />
                </CardContent>
              </StyledCard>
            </Box>
          ))}
        </Slider>
      </Box>
    </MotionWrapper>
  );
};
interface StyledCardProps {
  expanded: boolean;
}
const StyledCard = styled(Box)<StyledCardProps>(({ theme, expanded }) => ({
  transition: "transform 0.3s",
  transform: expanded ? "scale(1.2)" : "scale(1)",
  // zIndex: expanded ? 100000 : 100,
  cursor: "pointer",
  "&:hover": {
    transform: expanded ? "scale(1.8)" : "scale(1.1)",
  },

  padding: "1rem",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0, 0.6, 0.6, 0.2)",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  // maxWidth: 500,
  // height: "330px",
}));
export default TestimonialsCarousel;
