function getTimeRangeStatus(jobTimestamp) {
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

export function countJobsTimeRange(jobsArray) {
  const countByTimeRange = {
    All: 0,
    Today: 0,
    ThreeDays: 0,
    Week: 0,
    Month: 0,
    MoreThanMonth: 0,
  };

  jobsArray?.forEach((job) => {
    const timeRangeStatus = getTimeRangeStatus(job.dateAdded);
    countByTimeRange[timeRangeStatus]++;
  });

  return countByTimeRange;
}
