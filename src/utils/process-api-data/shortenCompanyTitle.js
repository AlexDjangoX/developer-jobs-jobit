export function shortenCompanyTitle(title) {
    let words = title.split(' ');
    let firstFourWords = words.slice(0, 4);
    let shortenedTitle = firstFourWords.join(' ');
  
    return shortenedTitle;
  }