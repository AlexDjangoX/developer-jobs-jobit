export const datePostedOptions = [
  'All',
  'Today',
  'ThreeDays',
  'Week',
  'Month',
  'MoreThanMonth',
];

export const remoteJobsOptions = ['OnlyRemote'];

export const employmentTypeOptions = ['FullTime', 'PartTime', 'Intern'];

export const jobRequirementsOptions = [
  'Education',
  'Degree',
  'LengthExperience',
  'ExperienceRequired',
];

export const sortOptions = ['newest', 'oldest'];

export const dropDownOptions = [
  {
    label: 'Date Posted',
    options: datePostedOptions,
    fieldName: 'dataPostedOptions',
    countDataKey: 'countByTimeRange',
  },
  {
    label: 'Remote Only',
    options: remoteJobsOptions,
    fieldName: 'remoteJobsOptions',
    countDataKey: 'countByRemoteJobs',
  },
  {
    label: 'Employment Type',
    options: employmentTypeOptions,
    fieldName: 'employmentTypeOptions',
    countDataKey: 'countByJobTypes',
  },
  {
    label: 'Job Requirements',
    options: jobRequirementsOptions,
    fieldName: 'jobRequirementsOptions',
    countDataKey: 'countByJobRequirements',
  },
];
