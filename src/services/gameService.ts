import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {GamePageFilter} from "../models/filter.model";
import {
  Game,
  GamePreview,
  GameWithTimestampReceiving,
} from "../models/game.model";
import {
  GetEmptyGamesPageResponse,
  GetGameByIdResponse,
  GetGamesPageResponse,
} from "../models/gameApi.model";
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
      query: (id) => `/game?id=${id}`,
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
      transformResponse: (
        response: GetGamesPageResponse | GetEmptyGamesPageResponse,
      ) => {
        if ("code" in response) {
          return [];
        }

        if (Array.isArray(response)) {
          return response.map((game) => mapGamePageViewToGamePreview(game));
        }

        return [];
      },
    }),
  }),
});

export const {useGetGameByIdQuery, useGetGamesQuery} = gameApi;
