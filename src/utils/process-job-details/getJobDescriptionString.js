export function getJobDescriptionString(inputString) {
  let cleanedString = inputString.replace(/[^a-zA-Z0-9 .,]/g, '');

  let sentences = cleanedString.split('.');

  let result = '';

  for (let sentence of sentences) {
    if (result.length + sentence.length + 1 > 500) break;
    result += sentence + '.';
  }

  return result;
}
