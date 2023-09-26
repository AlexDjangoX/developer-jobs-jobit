import { shortenText } from './shortenText';
import { getCleanString } from './cleanString';
import { daysUntilEnd } from './daysUntilEnd';
import { formatSalary } from './formatSalary.js';
import { formatJobType } from './formatJobType.js';
import { requiredSkills } from './requiredSkills.js';
import { jobPostedWithin } from './jobPostedWithin.js';
import { formatDateAdded } from './formatDateAdded';
import { parseJobDescription } from './parseJobDescription';
import { isValidURL } from './isValidUrl';

export function processResults(searchResults) {
  return searchResults?.data?.map((result) => ({
    jobId: result?.job_id,
    logo: result?.employer_logo,
    isValidURL: isValidURL(result?.employer_logo),
    city: result?.job_city,
    country: result?.job_country,
    employer: result?.employer_name,
    employerCompanyType: result?.employer_company_type,
    title: getCleanString(result?.job_title),
    skills: requiredSkills(result?.job_description),
    remoteJob: result?.job_is_remote,
    jobPostedWithin: jobPostedWithin(result?.job_posted_at_timestamp),
    jobApplyLink: result?.job_apply_link,
    employerWebsite: result?.employer_website,
    description: result?.job_description
      ? shortenText(result?.job_description, 200)
      : 'Unfortunately, no job description',
    longDescription: result?.job_description
      ? shortenText(result?.job_description, 500)
      : 'Unfortunately, no job description',
    jobType: formatJobType(result.job_employment_type),
    jobExperienceInsteadEducation: result?.job_experience_in_place_of_education,
    degreePreferred: result?.job_required_education?.degree_preferred,
    jobRequireExperiencePeriod:
      result?.job_required_experience?.required_experience_in_months,
    jobRequireExperience: result?.job_required_experience?.experience_mentioned,
    jobResponsibilities: parseJobDescription(result?.job_description),
    highlights: result?.job_highlights?.Qualifications,
    daysLeft: daysUntilEnd(result.job_offer_expiration_datetime_utc),
    datePostedTimeStamp: result?.job_posted_at_timestamp,
    dateAdded: formatDateAdded(result?.job_posted_at_timestamp),
    salary:
      result?.job_min_salary &&
      result?.job_max_salary &&
      result?.job_salary_currency &&
      result?.job_salary_period
        ? formatSalary(
            result?.job_min_salary,
            result?.job_max_salary,
            result?.job_salary_currency,
            result?.job_salary_period
          )
        : null,
  }));
}
