import { Typography, TypographyProps } from "@mui/material";

interface TitleProps extends TypographyProps {
  text: string;
  textColor?: string;
}

const Title = ({
  text,
  textColor = "linear-gradient(90deg, rgba(205,0,255,1) 0%, rgba(46,0,249,1) 0%, rgba(0,158,140,1) 58%, rgba(27,190,128,1) 100%)",
  ...props
}: TitleProps) => {
  return (
    <Typography
      align="center"
      fontWeight={800}
      gutterBottom
      fontFamily={"Plus Jakarta Sans"}
      sx={{
        background: textColor,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontFamily: "Plus Jakarta Sans",
        textTransform: "uppercase",
      }}
      {...props}
    >
      {text}
    </Typography>
  );
};

export default Title;
