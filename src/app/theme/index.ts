import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  typography: {
    fontFamily: ['"Roboto"', "Helvetica", "Arial", "sans-serif"].join(","),
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#530da9",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

export const breakpoints = theme.breakpoints.values;

export default theme;
