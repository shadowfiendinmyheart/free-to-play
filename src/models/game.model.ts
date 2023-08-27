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

export interface GamePageView {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

export type GetGamePageResponse = GamePageView[];

export interface Game
  extends Omit<
    GetGameByIdResponse,
    | "short_description"
    | "game_url"
    | "release_date"
    | "freetogame_profile_url"
    | "minimum_system_requirements"
  > {
  shortDescription: string;
  gameUrl: string;
  releaseDate: string;
  freetogameProfileUrl: string;
  minimumSystemRequirements?: MinimumSystemRequirements;
}

export interface GamePreview
  extends Omit<
    GamePageView,
    "short_description" | "game_url" | "release_date" | "freetogame_profile_url"
  > {
  shortDescription: string;
  gameUrl: string;
  releaseDate: string;
  freetogameProfileUrl: string;
}

export interface MinimumSystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface Screenshot {
  id: number;
  image: string;
}

export enum Platform {
  Pc = "pc",
  Browser = "browser",
  All = "all",
}

export enum Category {
  Mmorpg = "mmorpg",
  Shooter = "shooter",
  Strategy = "strategy",
  Moba = "moba",
  Racing = "racing",
  Sports = "sports",
  Social = "social",
  Sandbox = "sandbox",
  OpenWorld = "open-world",
  Survival = "survival",
  Pvp = "pvp",
  Pve = "pve",
  Pixel = "pixel",
  Voxel = "voxel",
  Zombie = "zombie",
  TurnBased = "turn-based",
  FirstPerson = "first-person",
  ThirdPerson = "third-Person",
  TopDown = "top-down",
  Tank = "tank",
  Space = "space",
  Sailing = "sailing",
  SideScroller = "side-scroller",
  Superhero = "superhero",
  permadeath = "permadeath",
  card = "card",
  BattleRoyale = "battle-royale",
  Mmo = "mmo",
  Mmofps = "mmofps",
  Mmotps = "mmotps",
  "3d" = "3d",
  "2d" = "2d",
  Anime = "anime",
  Fantasy = "fantasy",
  SciFi = "sci-fi",
  Fighting = "fighting",
  ActionRpg = "action-rpg",
  Action = "action",
  Military = "military",
  MartialArts = "martial-arts",
  Flight = "flight",
  LowSpec = "low-spec",
  TowerDefense = "tower-defense",
  Horror = "horror",
  Mmorts = "mmorts",
}

export enum SortGameBy {
  ReleaseDate = "release-date",
  Popularity = "popularity",
  Alphabetical = "alphabetical",
  Relevance = "relevance",
}
