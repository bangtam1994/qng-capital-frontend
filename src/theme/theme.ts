import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#9d9d9d",
      main: "#1d1d1f",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#a7e8d5",
      main: "#007f6f",
      dark: "#005344",
      contrastText: "#e0f3f2",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: ["Raleway", "Inter"].join(","),
    allVariants: {
      fontFamily: "Raleway",
      textTransform: "none",
    },
  },
});

export default theme;
