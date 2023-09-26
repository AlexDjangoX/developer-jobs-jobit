export function parseJobDescription(description) {
  const start = description.indexOf('Job Description :');

  if (start === -1) {
    return 'No job description found';
  }

  let jobDescription = description.slice(start);

  jobDescription = jobDescription.replace('Job Description :', '');

  jobDescription = jobDescription.replace(/[^a-zA-Z\s]/g, '');

  jobDescription = jobDescription.replace(/\bo\b/g, '');

  const lines = jobDescription.split('\n');

  const nonEmptyLines = lines.filter((line) => line.trim() !== '');

  return nonEmptyLines;
}
