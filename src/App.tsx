// src/App.js
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Header from "./components/Header";
import { getTheme } from "./utils/theme";
import EmailForm from "./components/EmailForm";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const theme = getTheme(themeMode);

  const handleThemeToggle = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header toggleTheme={handleThemeToggle} />

      <Container sx={{ px: { xs: 1, sm: 2 } }}>
        <EmailForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
