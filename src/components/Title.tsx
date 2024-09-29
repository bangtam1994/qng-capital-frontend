import { styled, Typography, TypographyProps } from "@mui/material";

interface TitleProps extends TypographyProps {
  text: string;
}

const StyledTitle = styled(Typography)(() => ({
  background:
    "linear-gradient(90deg, rgba(41,2,215,1) 0%, rgba(63,0,163,1) 11%, rgba(0,148,131,1) 56%, rgba(34,154,203,1) 100%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%, rgba(138,196,246,1) 100%, rgba(255,255,255,1) 100%, rgba(155,206,255,1) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontFamily: "Plus Jakarta Sans",
  textTransform: "uppercase",
}));

const Title = ({ text, ...props }: TitleProps) => {
  return (
    <StyledTitle
      align="center"
      fontWeight={800}
      gutterBottom
      fontFamily={"Plus Jakarta Sans"}
      {...props}
    >
      {text}
    </StyledTitle>
  );
};

export default Title;
