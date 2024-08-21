import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

// import "@mui/material/styles/styled";
import { Container, Divider, PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import XScrollTop from "./components/core/components/XScrollTop";
import XAppBar from "./components/core/sections/XAppBar";
import XFooter from "./components/core/sections/XFooter";
import { EmailSection } from "./components/sections/EmailSection";
import Hero from "./components/sections/Hero";
import { ServiceTest } from "./components/sections/ServiceTest";
import { LanguageEnum } from "./enum/LanguageEnum";
import { ThemeSchemaEnum } from "./enum/ThemeEnum";
import { RootState } from "./store/store";
import GlobalScrollbarStyles from "./styles/GlobalScrollbarStyles";
import getCustomTheme from "./utils/getCustomTheme";
import { getStoredThemeSchema } from "./utils/localStorageUtils";

const storedThemeSchema = getStoredThemeSchema();

export default function App() {
  const themeMode: PaletteMode = useSelector(
    (state: RootState) => state.themeMode
  );
  const [themeSchema, setThemeSchema] = useState(storedThemeSchema);
  const customTheme = createTheme(getCustomTheme(themeMode));
  const defaultTheme = createTheme({ palette: { mode: themeMode } });
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const toggleLanguage = () => {
    const newLanguage =
      currentLanguage === LanguageEnum.Tr ? LanguageEnum.En : LanguageEnum.Tr;
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
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
    <SnackbarProvider
      maxSnack={5}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <ThemeProvider
        theme={
          themeSchema === ThemeSchemaEnum.Custom ? customTheme : defaultTheme
        }
      >
        <GlobalScrollbarStyles />
        <CssBaseline />

        <XAppBar
          language={currentLanguage}
          toggleLanguage={toggleLanguage}
          themeSchema={themeSchema}
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
        <XScrollTop />
      </ThemeProvider>
    </SnackbarProvider>
  );
}
