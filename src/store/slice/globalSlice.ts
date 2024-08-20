import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  someValue: string;
}

const initialState: GlobalState = {
  someValue: "",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSomeValue: (state, action: PayloadAction<string>) => {
      state.someValue = action.payload;
    },
  },
});

export const { setSomeValue } = globalSlice.actions;
export default globalSlice.reducer;
