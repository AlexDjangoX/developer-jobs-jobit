export function shortenTitle(title) {
  if (typeof title !== 'string') {
    return '';
  }
    const words = title.split(' ');

    return words.length > 5 ? words.slice(0, 5).join(' ') : title;
  }