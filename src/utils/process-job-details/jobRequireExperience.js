export function jobRequireExperience(experienceRequirement, jobResults) {
  if (experienceRequirement) {
    return 'No experience required';
  } else {
    return `${jobResults?.job_required_experience.required_experience_in_months} months `;
  }
}
