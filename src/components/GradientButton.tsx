import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface GradientButtonProps extends ButtonProps {
  buttonType?: "primary" | "secondary";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "30px",
  height: "60px",
  boxShadow: "none",
  textTransform: "none",
  fontSize: theme.typography.button.fontSize,
  padding: "12px 30px",
  backgroundImage:
    "linear-gradient(90deg, rgba(162,21,238,1) 0%, rgba(122,46,172,0.9836309523809523) 37%, rgba(31,161,246,1) 75%, rgba(225,232,240,1) 100%)",
  backgroundSize: "200% 100%",
  backgroundPosition: "0% 0%",
  transition: "background-position 0.5s ease-in-out",
  color: "#ffff",
  "&:hover": {
    backgroundPosition: "100% 0%",
    boxShadow: "none",
  },
  ":focus": {
    outline: "none",
  },
}));

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <StyledButton startIcon={startIcon} endIcon={endIcon} {...props}>
      {children}
    </StyledButton>
  );
};

export default GradientButton;
