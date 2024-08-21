// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slice/globalSlice";
import languageReducer from "./slice/languageSlice";
import themeModeReducer from "./slice/themeModeSlice";

const store = configureStore({
  reducer: {
    global: globalReducer,
    language: languageReducer,
    themeMode: themeModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
