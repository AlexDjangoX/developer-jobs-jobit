export function applyFilters(results, allFilters) {
  const filterKeyMapping = {
    Intern: 'jobType',
    PartTime: 'jobType',
    FullTime: 'jobType',
    OnlyRemote: 'remoteJob',
    Education: 'degreePreferred',
    ExperienceRequired: 'jobRequireExperience',
    LengthExperience: 'jobRequireExperiencePeriod',
    Degree: 'degreePreferred',
    Today: 'jobPostedWithin',
    ThreeDays: 'jobPostedWithin',
    Week: 'jobPostedWithin',
    Month: 'jobPostedWithin',
    MoreThanMonth: 'jobPostedWithin',
  };

  let newResults = [...results];

  allFilters.forEach((filter) => {
    const key = filterKeyMapping[filter];
    if (key) {
      newResults = newResults.filter((result) => {
        switch (key) {
          case 'jobType':
            return result[key] === filter;
          case 'remoteJob':
          case 'degreePreferred':
          case 'jobRequireExperience':
            return result[key] === true;
          case 'jobRequireExperiencePeriod':
            return result[key] > 0;
          case 'jobPostedWithin':
            return result[key] === filter;
          default:
            return true;
        }
      });
    }
  });

  return newResults;
}
