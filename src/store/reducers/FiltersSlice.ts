import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Category, Platform, SortGameBy} from "../../models/game.model";

export interface FiltersState {
  tags: Category[];
  platform: Platform;
  sortBy: SortGameBy;
}

const initialState: FiltersState = {
  platform: Platform.All,
  sortBy: SortGameBy.Alphabetical,
  tags: [],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changePlatform(state, action: PayloadAction<Platform>) {
      state.platform = action.payload;
    },
  },
});

export default filtersSlice.reducer;
