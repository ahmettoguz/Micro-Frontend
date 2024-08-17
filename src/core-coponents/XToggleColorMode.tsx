import { PaletteMode } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";

interface ToggleColorModeProps {
  themeMode: PaletteMode;
  toggleColorMode: () => void;
}

function ToggleColorMode({ themeMode, toggleColorMode }: ToggleColorModeProps) {
  return (
    <Tooltip
      placement="bottom"
      title={themeMode === "dark" ? "light theme" : "dark theme"}
    >
      <Box sx={{ maxWidth: "32px" }}>
        <Button
          variant="text"
          onClick={toggleColorMode}
          size="small"
          aria-label="button to toggle theme"
          sx={{ minWidth: "32px", height: "32px", p: "4px" }}
        >
          {themeMode === "dark" ? (
            <WbSunnyRoundedIcon fontSize="small" />
          ) : (
            <ModeNightRoundedIcon fontSize="small" />
          )}
        </Button>
      </Box>
    </Tooltip>
  );
}

export default ToggleColorMode;
