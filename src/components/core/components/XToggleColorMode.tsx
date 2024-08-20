import { PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { ThemeModeEnum } from "../../../enum/ThemeEnum";
import { t } from "i18next";

interface ToggleColorModeProps {
  themeMode: PaletteMode;
  toggleColorMode: () => void;
}

export default function XToggleColorMode({
  themeMode,
  toggleColorMode,
}: ToggleColorModeProps) {
  return (
    <Tooltip
      placement="bottom"
      title={
        themeMode === ThemeModeEnum.Dark
          ? t("appbar.tooltip.themeModeLight")
          : t("appbar.tooltip.themeModeDark")
      }
    >
      <Box sx={{ maxWidth: "32px" }}>
        <Button
          variant="text"
          onClick={toggleColorMode}
          size="small"
          aria-label="button to toggle color"
          sx={{ minWidth: "32px", height: "32px", p: "4px" }}
        >
          {themeMode === ThemeModeEnum.Dark ? (
            <WbSunnyRoundedIcon fontSize="medium" />
          ) : (
            <ModeNightRoundedIcon fontSize="medium" />
          )}
        </Button>
      </Box>
    </Tooltip>
  );
}
