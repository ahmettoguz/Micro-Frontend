// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slice/globalSlice";
import languageReducer from "./slice/languageSlice";
import themeModeReducer from "./slice/themeModeSlice";
import themeSchemaReducer from "./slice/themeSchemaSlice";

const store = configureStore({
  reducer: {
    global: globalReducer,
    language: languageReducer,
    themeMode: themeModeReducer,
    themeSchema: themeSchemaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
