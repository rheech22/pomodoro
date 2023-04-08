export const expiryTimestamp = (min: number) => {
  const date = new Date();
  date.setSeconds(date.getSeconds() + min * 60);
  return date;
};
