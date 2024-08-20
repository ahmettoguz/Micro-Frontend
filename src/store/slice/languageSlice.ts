import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getStoredLanguage } from "../../utils/localStorageUtils";

export interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: getStoredLanguage(),
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      localStorage.setItem("language", action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
