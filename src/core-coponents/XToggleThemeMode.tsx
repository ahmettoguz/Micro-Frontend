import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";
import LaptopRoundedIcon from "@mui/icons-material/LaptopRounded";
import { ThemeSchemaEnum } from "../enum/ThemeEnum";

interface ToggleColorModeProps {
  themeSchema: string;
  toggleTheme: () => void;
}

const isThemeChangeEnabled =
  import.meta.env.VITE_APP_ENABLE_THEME_CHANGE === "true";

export default function XToggleThemeMode({
  themeSchema,
  toggleTheme,
}: ToggleColorModeProps) {
  return (
    <>
      {isThemeChangeEnabled ? (
        <Tooltip
          placement="bottom"
          title={
            themeSchema === ThemeSchemaEnum.Custom
              ? "switch default theme"
              : "switch custom theme"
          }
        >
          <Box sx={{ maxWidth: "32px" }}>
            <Button
              variant="text"
              onClick={toggleTheme}
              size="small"
              aria-label="button to toggle theme"
              sx={{ minWidth: "32px", height: "32px", p: "4px" }}
            >
              {themeSchema === ThemeSchemaEnum.Custom ? (
                <LaptopRoundedIcon fontSize="medium" />
              ) : (
                <LaptopChromebookRoundedIcon fontSize="medium" />
              )}
            </Button>
          </Box>
        </Tooltip>
      ) : null}
    </>
  );
}
