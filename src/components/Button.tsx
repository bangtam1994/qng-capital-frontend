import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface CustomButtonProps extends ButtonProps {
  buttonType?: "primary" | "secondary";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const StyledButton = styled(Button)<{ buttonType: "primary" | "secondary" }>(
  ({ theme, buttonType }) => ({
    borderRadius: "25px",
    boxShadow: "none",
    textTransform: "none",
    fontSize: theme.typography.button.fontSize,
    padding: "12px 29px",
    backgroundColor:
      buttonType === "primary"
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    color:
      buttonType === "primary"
        ? theme.palette.primary.contrastText
        : theme.palette.secondary.contrastText,
    "&:hover": {
      backgroundColor:
        buttonType === "primary"
          ? theme.palette.primary.main
          : theme.palette.secondary.dark,
      color:
        buttonType === "primary"
          ? theme.palette.secondary.main
          : theme.palette.secondary.contrastText,
    },
    ":focus": {
      outline: "none",
    },
  })
);

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  buttonType = "primary",
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <StyledButton
      buttonType={buttonType}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
