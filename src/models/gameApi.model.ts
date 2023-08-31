import { GamePageView, MinimumSystemRequirements, Screenshot } from "./game.model";

export interface GetGameByIdResponse {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements?: MinimumSystemRequirements;
  screenshots: Screenshot[];
}

export type GetGamesPageResponse = GamePageView[];
export type GetEmptyGamesPageResponse = {
  status: number;
  status_message: string;
};
