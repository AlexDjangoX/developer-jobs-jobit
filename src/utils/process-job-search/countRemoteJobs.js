export function countRemoteJobs(jobsArray) {
  const remoteJobsCount = jobsArray?.reduce((count, job) => {
    return count + (job.remoteJob ? 1 : 0);
  }, 0);

  return remoteJobsCount;
}
