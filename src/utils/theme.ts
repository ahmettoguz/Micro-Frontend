import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const getTheme = (mode) => {
  let theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#1976d2" : "#90caf9",
      },
      background: {
        default: mode === "light" ? "#ffffff" : "#121212",
        paper: mode === "light" ? "#f4f6f8" : "#1e1e1e",
      },
    },
    typography: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      h1: {
        fontSize: '2.5rem',
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 500,
        lineHeight: 1.3,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.43,
      },
    },
  });

  theme = responsiveFontSizes(theme);

  theme.components = {
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: '1rem',
          [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '1.5rem', // Default icon size
          [theme.breakpoints.down('sm')]: {
            fontSize: '1.25rem', // Smaller icon size for small screens
          },
        },
      },
    },
  };

  return theme;
};
