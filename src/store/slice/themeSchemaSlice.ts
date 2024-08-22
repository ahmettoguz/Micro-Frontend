import { createSlice } from "@reduxjs/toolkit";
import { ThemeSchemaEnum } from "../../enum/ThemeEnum";
import { getStoredThemeSchema } from "../../utils/localStorageUtils";

const storedThemeSchema = getStoredThemeSchema();

const themeSchemaSlice = createSlice({
  name: "themeSchema",
  initialState: storedThemeSchema,
  reducers: {
    toggleThemeSchema: (state) => {
      const newSchema =
        state === ThemeSchemaEnum.Custom
          ? ThemeSchemaEnum.Default
          : ThemeSchemaEnum.Custom;
      localStorage.setItem("themeSchema", newSchema);
      return newSchema;
    },
  },
});

export const { toggleThemeSchema } = themeSchemaSlice.actions;
export default themeSchemaSlice.reducer;
