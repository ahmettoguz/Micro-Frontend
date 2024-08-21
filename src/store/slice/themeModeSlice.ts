import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";
import { ThemeModeEnum } from "../../enum/ThemeEnum";
import { getStoredThemeMode } from "../../utils/localStorageUtils";

const storedThemeMode = getStoredThemeMode();

const themeModeSlice = createSlice({
  name: "themeMode",
  initialState: storedThemeMode as PaletteMode,
  reducers: {
    toggleThemeMode: (state) => {
      const newMode =
        state === ThemeModeEnum.Light
          ? ThemeModeEnum.Dark
          : ThemeModeEnum.Light;
      localStorage.setItem("themeMode", newMode);
      return newMode;
    },
  },
});

export const { toggleThemeMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;
