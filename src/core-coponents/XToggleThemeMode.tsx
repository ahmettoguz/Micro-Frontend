import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import LaptopChromebookRoundedIcon from "@mui/icons-material/LaptopChromebookRounded";
import LaptopRoundedIcon from "@mui/icons-material/LaptopRounded";

interface ToggleColorModeProps {
  themeSchema: string;
  toggleTheme: () => void;
}

export default function XToggleThemeMode({
  themeSchema,
  toggleTheme,
}: ToggleColorModeProps) {
  return (
    <Tooltip
      placement="bottom"
      title={themeSchema === "pl" ? "default theme" : "custom theme"}
    >
      <Box sx={{ maxWidth: "32px" }}>
        <Button
          variant="text"
          onClick={toggleTheme}
          size="small"
          aria-label="button to toggle theme"
          sx={{ minWidth: "32px", height: "32px", p: "4px" }}
        >
          {themeSchema === "pl" ? (
            <LaptopRoundedIcon fontSize="medium" />
          ) : (
            <LaptopChromebookRoundedIcon fontSize="small" />
          )}
        </Button>
      </Box>
    </Tooltip>
  );
}
