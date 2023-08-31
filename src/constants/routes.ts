export const getRoutePath = {
  mainPage: () => "/",
  gamePage: (id?: number) => `/game/${id || ":id"}`,
};
