export function daysUntilEnd(futureUTCDate) {
  const currentDate = new Date();
  const targetDate = new Date(futureUTCDate);

  currentDate.setMinutes(
    currentDate.getMinutes() - currentDate.getTimezoneOffset()
  );
  const differenceInTime = targetDate.getTime() - currentDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  return Math.max(0, differenceInDays);
}
