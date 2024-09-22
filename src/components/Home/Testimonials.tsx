import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { testimonials } from "../../utils/testimonials";
import Slider from "react-slick";
import MotionWrapper from "../MotionWrapper";

const TestimonialsCarousel: React.FC = () => {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        sx={{ fontSize: { xs: 60, md: 70 } }}
      >
        Témoignages
      </Typography>
      <Typography
        align="center"
        marginTop={"-70px"}
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
                display: "flex",
                justifyContent: "center",
                height: "300px",
              }}
            >
              <Card
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },

                  padding: "1rem",
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0, 0.6, 0.6, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  m: 1,
                  backgroundColor: theme.palette.background.default,
                  width: "100%",
                  maxWidth: 400,
                  height: "200px",
                }}
              >
                <CardMedia
                  component="img"
                  src={`${import.meta.env.BASE_URL}${testimonial.image}`}
                  alt={testimonial.name}
                  sx={{ borderRadius: "50%", width: 100, height: 100, mb: 2 }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "{testimonial.text}"
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </MotionWrapper>
  );
};

export default TestimonialsCarousel;
