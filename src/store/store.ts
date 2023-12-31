import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { gameApi } from "../services/gameService";
import filterReducer from "./reducers/FiltersSlice";
import listReducer from "./reducers/ListSlice";

const rootReducer = combineReducers({
  filterReducer,
  listReducer,
  [gameApi.reducerPath]: gameApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(gameApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
