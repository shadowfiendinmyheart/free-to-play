import {Category, Platform, SortGameBy} from "./game.model";

export interface GamePageFilter {
  tags: Category[];
  platform: Platform;
  sortBy: SortGameBy;
}
