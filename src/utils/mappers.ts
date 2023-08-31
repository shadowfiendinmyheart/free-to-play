import { Game, GamePageView, GamePreview } from "../models/game.model";
import { GetGameByIdResponse } from "../models/gameApi.model";

export const mapGamePageViewToGamePreview = (
  gamePageView: GamePageView,
): GamePreview => ({
  ...gamePageView,
  shortDescription: gamePageView.short_description,
  gameUrl: gamePageView.game_url,
  releaseDate: gamePageView.release_date,
  freetogameProfileUrl: gamePageView.freetogame_profile_url,
});

export const mapGameByIdToGame = (gameById: GetGameByIdResponse): Game => ({
  ...gameById,
  shortDescription: gameById.short_description,
  gameUrl: gameById.game_url,
  releaseDate: gameById.release_date,
  freetogameProfileUrl: gameById.freetogame_profile_url,
  minimumSystemRequirements: gameById.minimum_system_requirements,
});
