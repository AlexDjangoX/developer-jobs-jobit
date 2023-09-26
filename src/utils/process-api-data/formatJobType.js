export function formatJobType(jobType) {
  const wordDictionary = {
    FULLTIME: 'Full Time',
    PARTTIME: 'Part Time',
    INTERN: 'Intern',
  };

  return wordDictionary[jobType];
}
