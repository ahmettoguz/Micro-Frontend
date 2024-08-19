import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

import { Container, PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import EmailForm from "./components/EmailForm";
import XAppBar from "./components/sections/XAppBar";
import XFooter from "./components/sections/XFooter";
import { ThemeModeEnum, ThemeSchemaEnum } from "./enum/ThemeEnum";
import getCustomTheme from "./utils/getCustomTheme";
import {
  getStoredThemeMode,
  getStoredThemeSchema,
} from "./utils/localStorageUtils";

const storedThemeMode = getStoredThemeMode();
const storedThemeSchema = getStoredThemeSchema();

console.log(storedThemeMode);

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

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 14,
          pb: { xs: 8, sm: 12 },
        }}
      >
        <EmailForm />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
          nobis magnam rem praesentium deserunt ut quae, placeat incidunt
          molestiae repudiandae perferendis quos quod fugiat cumque expedita vel
          sit totam. Ex soluta iusto necessitatibus molestias, numquam fugiat,
          provident voluptatem facere perspiciatis nesciunt corporis quia alias
          odio odit? Officia aliquid, blanditiis commodi consequatur, neque
          iusto culpa quas, officiis unde dicta dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
          nobis magnam rem praesentium deserunt ut quae, placeat incidunt
          molestiae repudiandae perferendis quos quod fugiat cumque expedita vel
          sit totam. Ex soluta iusto necessitatibus molestias, numquam fugiat,
          provident voluptatem facere perspiciatis nesciunt corporis quia alias
          odio odit? Officia aliquid, blanditiis commodi consequatur, neque
          iusto culpa quas, officiis unde dicta dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
          nobis magnam rem praesentium deserunt ut quae, placeat incidunt
          molestiae repudiandae perferendis quos quod fugiat cumque expedita vel
          sit totam. Ex soluta iusto necessitatibus molestias, numquam fugiat,
          provident voluptatem facere perspiciatis nesciunt corporis quia alias
          odio odit? Officia aliquid, blanditiis commodi consequatur, neque
          iusto culpa quas, officiis unde dicta dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
          nobis magnam rem praesentium deserunt ut quae, placeat incidunt
          molestiae repudiandae perferendis quos quod fugiat cumque expedita vel
          sit totam. Ex soluta iusto necessitatibus molestias, numquam fugiat,
          provident voluptatem facere perspiciatis nesciunt corporis quia alias
          odio odit? Officia aliquid, blanditiis commodi consequatur, neque
          iusto culpa quas, officiis unde dicta dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
          nobis magnam rem praesentium deserunt ut quae, placeat incidunt
          molestiae repudiandae perferendis quos quod fugiat cumque expedita vel
          sit totam. Ex soluta iusto necessitatibus molestias, numquam fugiat,
          provident voluptatem facere perspiciatis nesciunt corporis quia alias
          odio odit? Officia aliquid, blanditiis commodi consequatur, neque
          iusto culpa quas, officiis unde dicta dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
          nobis magnam rem praesentium deserunt ut quae, placeat incidunt
          molestiae repudiandae perferendis quos quod fugiat cumque expedita vel
          sit totam. Ex soluta iusto necessitatibus molestias, numquam fugiat,
          provident voluptatem facere perspiciatis nesciunt corporis quia alias
          odio odit? Officia aliquid, blanditiis commodi consequatur, neque
          iusto culpa quas, officiis unde dicta dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
          nobis magnam rem praesentium deserunt ut quae, placeat incidunt
          molestiae repudiandae perferendis quos quod fugiat cumque expedita vel
          sit totam. Ex soluta iusto necessitatibus molestias, numquam fugiat,
          provident voluptatem facere perspiciatis nesciunt corporis quia alias
          odio odit? Officia aliquid, blanditiis commodi consequatur, neque
          iusto culpa quas, officiis unde dicta dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
          nobis magnam rem praesentium deserunt ut quae, placeat incidunt
          molestiae repudiandae perferendis quos quod fugiat cumque expedita vel
          sit totam. Ex soluta iusto necessitatibus molestias, numquam fugiat,
          provident voluptatem facere perspiciatis nesciunt corporis quia alias
          odio odit? Officia aliquid, blanditiis commodi consequatur, neque
          iusto culpa quas, officiis unde dicta dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
          nobis magnam rem praesentium deserunt ut quae, placeat incidunt
          molestiae repudiandae perferendis quos quod fugiat cumque expedita vel
          sit totam. Ex soluta iusto necessitatibus molestias, numquam fugiat,
          provident voluptatem facere perspiciatis nesciunt corporis quia alias
          odio odit? Officia aliquid, blanditiis commodi consequatur, neque
          iusto culpa quas, officiis unde dicta dolorum?
        </p>
      </Container>
      <XFooter />
    </ThemeProvider>
  );
}

export default App;
