export const getRuDate = (date: string) => {
  return new Date(date).toLocaleString("ru", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "UTC",
  });
};

export const checkIsEarlierThanFiveMinutes = (timestamp: number) => {
  const FIVE_MINUTES_IN_MS = 300_000;
  return Date.now() - timestamp < FIVE_MINUTES_IN_MS;
};
