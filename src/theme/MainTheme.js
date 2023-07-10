import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F0F53",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    error: {
      main: "#FF1100",
    },
    warning: {
      main: "#FFC600",
    },
    info: {
      main: "#31DCFF",
    },
    success: {
      main: "#43FF31",
    },
  },
});

export const MainTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
