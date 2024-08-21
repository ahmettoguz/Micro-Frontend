import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { changeLanguage } from "i18next";
import { LanguageEnum } from "../../enum/LanguageEnum";
import { getStoredLanguage } from "../../utils/localStorageUtils";

const storedLanguage = getStoredLanguage();

const languageSlice = createSlice({
  name: "language",
  initialState: storedLanguage,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageEnum>) => {
      console.log("aciton paylodd");
      console.log(action.payload);
      localStorage.setItem("language", action.payload);
      changeLanguage(action.payload);
      return action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
