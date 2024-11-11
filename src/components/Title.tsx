import { Typography, TypographyProps } from "@mui/material";

interface TitleProps extends TypographyProps {
  text: string;
  textColor?: string;
}

const Title = ({
  text,
  textColor = "linear-gradient(90deg, rgba(249,238,255,1) 0%, rgba(200,115,255,0.9836309523809523) 37%, rgba(116,200,255,1) 75%, rgba(225,232,240,1) 100%)",
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
        fontWeight: 700,
        fontSize: "3em",
      }}
      {...props}
    >
      {text}
    </Typography>
  );
};

export default Title;
