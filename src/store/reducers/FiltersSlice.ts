import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Platform, SortGameBy } from "../../models/game.model";

export interface FiltersState {
  platform: Platform;
  tags: Category[];
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
    changeCategories(state, action: PayloadAction<Category[]>) {
      state.tags = action.payload;
    },
    changeSortBy(state, action: PayloadAction<SortGameBy>) {
      state.sortBy = action.payload;
    },
  },
});

export default filtersSlice.reducer;
