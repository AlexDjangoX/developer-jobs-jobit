export function countJobTypes(jobsArray) {
  const jobTypeCounts = {
    FullTime: 0,
    PartTime: 0,
    Intern: 0,
  };

  jobsArray?.forEach((job) => {
    jobTypeCounts[job.jobType]++;
  });

  return jobTypeCounts;
}
