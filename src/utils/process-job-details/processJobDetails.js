import { getDaysSince } from './getDaySince.js';
import { processJobDescription } from './processJobDescription.js';
import { processJobDescriptionSimple } from './processJobDescriptionSimple.js';
import { formatJobType } from '../process-api-data/formatJobType.js';
import { jobRequireExperience } from './jobRequireExperience.js';
import { formatSalary } from '../process-api-data/formatSalary.js';
import { jobLevel } from './jobLevel.js';
import { getJobDescriptionString } from './getJobDescriptionString.js';
export function processJobDetails(jobResults) {
  return {
    logo: jobResults?.employer_logo,
    employerName: jobResults?.employer_name,
    city: jobResults?.job_city,
    country: jobResults?.job_country,
    jobApply: jobResults?.job_apply_link,
    daysSinceJobPosted: getDaysSince(jobResults?.job_posted_at_timestamp),
    jobEmploymentType: formatJobType(jobResults?.job_employment_type),
    jobLevel: jobLevel(jobResults?.job_description),
    jobRequireExperience: jobRequireExperience(
      jobResults?.job_required_experience?.no_experience_required,
      jobResults
    ),
    jobDescription: getJobDescriptionString(jobResults?.job_description),
    processedJobDescription: processJobDescription(jobResults?.job_description),
    simpleJobDescription: processJobDescriptionSimple(
      jobResults?.job_description
    ),
    salary:
      jobResults?.job_min_salary &&
      jobResults?.job_max_salary &&
      jobResults?.job_salary_currency &&
      jobResults?.job_salary_period
        ? formatSalary(
            jobResults?.job_min_salary,
            jobResults?.job_max_salary,
            jobResults?.job_salary_currency,
            jobResults?.job_salary_period
          )
        : null,
  };
}
