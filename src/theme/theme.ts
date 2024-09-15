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
      paper: "#E1E3EA",
    },
  },

  typography: {
    fontFamily: ["Raleway", "Inter"].join(","),
    allVariants: {
      fontFamily: "Raleway",
      textTransform: "none",
    },

    h1: { fontSize: "3.2rem", fontWeight: 700 },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
  },
});

export default theme;
