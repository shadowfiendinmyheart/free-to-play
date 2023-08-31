import { Game } from "../../../models/game.model";

export type GameProps<T extends keyof Game> = Partial<
  Pick<Game, T extends string ? T : void>
> & { isLoading: boolean };
