import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ListState {
  currentPage: number;
}

const initialState: ListState = {
  currentPage: 1,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export default listSlice.reducer;
