export function countJobRequirements(jobsArray) {
  let Education = 0;
  let Degree = 0;
  let LengthExperience = 0;
  let ExperienceRequired = 0;

  jobsArray?.forEach((job) => {
    if (job.jobExperienceInsteadEducation) {
      Education++;
    }

    if (job.degreePreferred) {
      Degree++;
    }

    if (job.jobRequireExperiencePeriod) {
      LengthExperience++;
    }

    if (job.jobRequireExperience) {
      ExperienceRequired++;
    }
  });

  return {
    Education,
    Degree,
    LengthExperience,
    ExperienceRequired,
  };
}
