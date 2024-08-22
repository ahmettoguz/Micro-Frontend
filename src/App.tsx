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
import { useSelector } from "react-redux";
import XScrollTop from "./components/core/components/XScrollTop";
import XAppBar from "./components/core/sections/XAppBar";
import XFooter from "./components/core/sections/XFooter";
import { EmailSection } from "./components/sections/EmailSection";
import Hero from "./components/sections/Hero";
import { ServiceTest } from "./components/sections/ServiceTest";
import { ThemeSchemaEnum } from "./enum/ThemeEnum";
import { RootState } from "./store/store";
import GlobalScrollbarStyles from "./styles/GlobalScrollbarStyles";
import getCustomTheme from "./utils/getCustomTheme";

export default function App() {
  useSelector((state: RootState) => state.language);

  const themeMode: PaletteMode = useSelector(
    (state: RootState) => state.themeMode
  );
  const themeSchema = useSelector((state: RootState) => state.themeSchema);
  const customTheme = createTheme(getCustomTheme(themeMode));
  const defaultTheme = createTheme({ palette: { mode: themeMode } });

  return (
    <SnackbarProvider maxSnack={5}>
      <ThemeProvider
        theme={
          themeSchema === ThemeSchemaEnum.Custom ? customTheme : defaultTheme
        }
      >
        <GlobalScrollbarStyles />
        <CssBaseline />

        <XAppBar />

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
