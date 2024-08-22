import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { ThemeModeEnum } from "../../../enum/ThemeEnum";
import { toggleThemeMode } from "../../../store/slice/themeModeSlice";
import { RootState } from "../../../store/store";
import { useSnackbarUtils } from "../../../utils/useSnackbarUtils";

export default function XToggleColorMode() {
  const { showSnackbar } = useSnackbarUtils();
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.themeMode);

  const handleToggle = () => {
    dispatch(toggleThemeMode());

    showSnackbar(
      t("appbar.snackbar.themeMode", {
        themeMode:
          themeMode === ThemeModeEnum.Dark
            ? t("common.light")
            : t("common.dark"),
      })
    );
  };

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
          onClick={handleToggle}
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
