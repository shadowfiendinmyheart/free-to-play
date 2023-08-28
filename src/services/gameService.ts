import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Game, GetGameByIdResponse} from "../models/game.model";
import {mapGameByIdToGame} from "../utils/mappers";

export const gameApi = createApi({
  reducerPath: "gameApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://free-to-play-games-database.p.rapidapi.com/api/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        process.env.REACT_APP_FREE_TO_GAME_RAPID_API_KEY || "",
      );
      headers.set(
        "X-RapidAPI-Host",
        "free-to-play-games-database.p.rapidapi.com",
      );
      return headers;
    },
  }),
  endpoints: (build) => ({
    getGameById: build.query<Game, number>({
      query: (id) => {
        // local storage set id and timestamp
        return `/game?id=${id}`;
      },
      transformResponse: (response: GetGameByIdResponse) =>
        mapGameByIdToGame(response),
    }),
  }),
});

export const {useGetGameByIdQuery} = gameApi;
