import { GamePreview } from "../../models/game.model";

export const LIST_DEFAULT_PAGE_SIZE = 5;

export const getFakeGames = (): GamePreview[] => {
  const fakeGames: GamePreview[] = Array(LIST_DEFAULT_PAGE_SIZE).fill({
    developer: "",
    freetogameProfileUrl: "",
    gameUrl: "",
    genre: "",
    id: 0,
    platform: "",
    publisher: "",
    releaseDate: "",
    shortDescription: "",
    thumbnail: "",
    title: "",
  });

  return fakeGames;
};
