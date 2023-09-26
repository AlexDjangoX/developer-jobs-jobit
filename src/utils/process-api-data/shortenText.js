export const shortenText = (text, maxLength) => {
  // No need to shorten if the text is already within the limit
  if (text.length <= maxLength) {
    return text;
  }

  // Get the substring of the first maxLength characters
  let shortenedText = text.slice(0, maxLength);

  // Find the last occurrence of a full stop within the substring
  const lastFullStopIndex = shortenedText.lastIndexOf('.');

  // Include the full stop in the shortened text
  if (lastFullStopIndex !== -1) {
    shortenedText = shortenedText.slice(0, lastFullStopIndex + 1);
  } else {
    // If no full stop is found, add "..." at the end
    shortenedText = shortenedText + '...';
  }

  return shortenedText;
};
