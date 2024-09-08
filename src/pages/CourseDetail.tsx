import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Picture from "../assets/phone_qng.png";
import StripeCheckout from "../components/Course/Checkout";
// Styled components
const ImageContainer = styled(Box)({
  //   width: { md: "600px", xs: "400px" },
  height: "600px",
});

const ContentContainer = styled(Box)({
  flex: 2,
  padding: "2rem",
});

const CheckoutCard = styled(Box)({
  marginTop: "2rem",
  padding: "3rem",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
});

const CourseDetail: React.FC<{ type: string }> = ({ type }) => {
  //   const { type } = useParams<{ type: string }>();
  console.log(type);
  // Data based on the course type
  const courseData = {
    basic: {
      title: "Basic Plan",
      description:
        "Vous aurez accès aux : Signaux, Canal Télégram privé, E-learning vidéos VIP",
      price: "99",
      image: Picture,
    },
    // premium: {
    //   title: "Premium Plan",
    //   description: "This is a premium plan offering...",
    //   price: "$199",
    //   image: "./assets/phone_qng.png",
    // },
    // gold: {
    //   title: "Gold Plan",
    //   description: "This is a gold plan offering...",
    //   price: "$299",
    //   image: "./assets/phone_qng.png",
    // },
  };

  const { title, description, price } = courseData.basic;

  return (
    <Container>
      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        gap={{ md: "3rem", xs: "0.5rem" }}
      >
        <ImageContainer>
          <img
            src={Picture}
            height={"100%"}
            width={"100%"}
            style={{ objectFit: "contain" }}
          />
        </ImageContainer>

        <ContentContainer textAlign={{ md: "start", xs: "center" }}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
          <Typography variant="h4" color="primary" gutterBottom>
            {price} €
          </Typography>
          <CheckoutCard>
            <Typography variant="h6" gutterBottom>
              Prêts à devenir des traders confirmés ?
            </Typography>

            <StripeCheckout
              price={Number(price)}
              onSuccess={() => console.log("success, callback")}
            />
          </CheckoutCard>
        </ContentContainer>
      </Box>
    </Container>
  );
};

export default CourseDetail;
