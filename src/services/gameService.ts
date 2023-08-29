import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {GamePageFilter} from "../models/filter.model";
import {
  Game,
  GamePageView,
  GamePreview,
  GameWithTimestampReceiving,
  GetGameByIdResponse,
  GetGamesPageResponse,
} from "../models/game.model";
import {
  mapGameByIdToGame,
  mapGamePageViewToGamePreview,
} from "../utils/mappers";

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
        return `/game?id=${id}`;
      },
      transformResponse: (response: GetGameByIdResponse) => {
        const mappedGameResponse = {...mapGameByIdToGame(response)};
        const gameWithTimestampReceiving: GameWithTimestampReceiving = {
          ...mappedGameResponse,
          timestampReceiving: Date.now(),
        };
        sessionStorage.setItem(
          `game_${mappedGameResponse.id}`,
          JSON.stringify(gameWithTimestampReceiving),
        );
        return mappedGameResponse;
      },
    }),
    getGames: build.query<GamePreview[], GamePageFilter>({
      query: ({platform, sortBy, tags}) => ({
        url: tags.length ? "/filter" : "/games",
        params: tags.length
          ? {tag: tags.join("."), platform, sortBy}
          : {platform, sortBy},
      }),
      transformResponse: (response: GetGamesPageResponse) => {
        return response.map((game) => mapGamePageViewToGamePreview(game));
      },
    }),
  }),
});

export const {useGetGameByIdQuery, useGetGamesQuery} = gameApi;
