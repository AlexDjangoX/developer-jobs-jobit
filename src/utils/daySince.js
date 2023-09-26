export function daysSince(pastUTCDate) {
    const currentDate = new Date();
    const targetDate = new Date(pastUTCDate);
  
    currentDate.setMinutes(currentDate.getMinutes() - currentDate.getTimezoneOffset());
    const differenceInTime = currentDate.getTime() - targetDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
}