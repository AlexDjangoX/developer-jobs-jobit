export function jobPostedWithin(jobTimestamp) {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const oneWeekInMilliseconds = oneDayInMilliseconds * 7;
  const oneMonthInMilliseconds = oneDayInMilliseconds * 30;

  const now = Date.now();
  const differenceInMilliseconds = now - jobTimestamp;

  if (differenceInMilliseconds < oneDayInMilliseconds) {
    return 'Today';
  } else if (differenceInMilliseconds < oneDayInMilliseconds * 3) {
    return 'ThreeDays';
  } else if (differenceInMilliseconds < oneWeekInMilliseconds) {
    return 'Week';
  } else if (differenceInMilliseconds < oneMonthInMilliseconds) {
    return 'Month';
  } else {
    return 'MoreThanMonth';
  }
}
