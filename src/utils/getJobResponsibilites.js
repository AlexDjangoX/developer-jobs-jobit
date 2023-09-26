export function parseJobDescription(description) {
    // Find the start of the job description.
    const start = description.indexOf('Job Description :');

    if (start === -1) {
        return 'No job description found';
    }

    // Cut off everything before "Job Description :"
    let jobDescription = description.slice(start);

    // Remove "Job Description :" from the start of the string.
    jobDescription = jobDescription.replace('Job Description :', '');

    // Remove anything that is not a letter or space.
    jobDescription = jobDescription.replace(/[^a-zA-Z\s]/g, '');

    // Remove any standalone 'o' letters.
    jobDescription = jobDescription.replace(/\bo\b/g, '');

    // Split the string by newline characters into an array.
    const lines = jobDescription.split('\n');

    // Remove any empty lines.
    const nonEmptyLines = lines.filter(line => line.trim() !== '');

    return nonEmptyLines;
}