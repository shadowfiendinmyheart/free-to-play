export const getRuDate = (date: string) => {
  return new Date(date).toLocaleString("ru", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "UTC",
  });
};
