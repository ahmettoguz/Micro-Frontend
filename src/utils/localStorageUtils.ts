import { ThemeModeEnum, ThemeSchemaEnum } from "../enum/ThemeEnum";

export const getStoredThemeMode = () => {
  let localStorageVal = localStorage.getItem("themeMode") as ThemeModeEnum;

  return Object.values(ThemeModeEnum).includes(localStorageVal)
    ? localStorageVal
    : ThemeModeEnum.Light;
};

export const getStoredThemeSchema = () => {
  let localStorageVal = localStorage.getItem("themeSchema") as ThemeSchemaEnum;

  return Object.values(ThemeSchemaEnum).includes(localStorageVal)
    ? localStorageVal
    : ThemeSchemaEnum.Default;
};
