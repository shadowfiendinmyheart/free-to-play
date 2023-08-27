export const ROUTES = {
  MAIN_PAGE: "/",
  GAME_PAGE: "/game/:id",
};

export const getGamePageRoutePath = (id: number) => `/game/${id}`;

// TODO
export const getRoutes = {
  mainPage: () => "/",
  gamePage: (id?: number) => `/game/${id || ":id"}`,
};
