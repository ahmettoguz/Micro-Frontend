import { createTheme } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // light mode colors
          primary: {
            main: "#1976d2",
          },
          background: {
            default: "#ffffff",
          },
        }
      : {
          // dark mode colors
          primary: {
            main: "#90caf9",
          },
          background: {
            default: "#121212",
          },
        }),
  },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));
