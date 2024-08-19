import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

import { Container, Divider, PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { EmailSection } from "./components/EmailSection";
import Hero from "./components/Hero";
import XAppBar from "./components/sections/XAppBar";
import XFooter from "./components/sections/XFooter";
import { ThemeModeEnum, ThemeSchemaEnum } from "./enum/ThemeEnum";
import getCustomTheme from "./utils/getCustomTheme";
import {
  getStoredThemeMode,
  getStoredThemeSchema,
} from "./utils/localStorageUtils";
import { ServiceTest } from "./components/ServiceTest";

const storedThemeMode = getStoredThemeMode();
const storedThemeSchema = getStoredThemeSchema();

function App() {
  const [themeMode, setThemeMode] = useState<PaletteMode>(storedThemeMode);
  const [themeSchema, setThemeSchema] = useState(storedThemeSchema);

  const customTheme = createTheme(getCustomTheme(themeMode));
  const defaultTheme = createTheme({ palette: { mode: themeMode } });

  const toggleColorMode = () => {
    setThemeMode((prevMode) => {
      const tempMode =
        prevMode === ThemeModeEnum.Light
          ? ThemeModeEnum.Dark
          : ThemeModeEnum.Light;

      localStorage.setItem("themeMode", tempMode);
      return tempMode;
    });
  };
  const toggleTheme = () => {
    setThemeSchema((prevTheme) => {
      const tempSchema =
        prevTheme === ThemeSchemaEnum.Custom
          ? ThemeSchemaEnum.Default
          : ThemeSchemaEnum.Custom;

      localStorage.setItem("themeSchema", tempSchema);
      return tempSchema;
    });
  };

  return (
    <ThemeProvider
      theme={
        themeSchema === ThemeSchemaEnum.Custom ? customTheme : defaultTheme
      }
    >
      <CssBaseline />

      <XAppBar
        themeMode={themeMode}
        themeSchema={themeSchema}
        toggleColorMode={toggleColorMode}
        toggleTheme={toggleTheme}
      />

      <Hero />

      <Divider />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: 5,
        }}
      >
        <EmailSection />

        <Divider />
        
        <ServiceTest />
      </Container>
      <XFooter />
    </ThemeProvider>
  );
}

export default App;
