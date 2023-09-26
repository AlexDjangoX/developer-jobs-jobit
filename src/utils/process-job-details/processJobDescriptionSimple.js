export function processJobDescriptionSimple(text) {
  let sentences = text.split('.');
  let result = [];
  let temp = '';

  for (let i = 0; i < sentences.length; i++) {
    let newSentence = sentences[i].trim() + '. ';

    if ((temp + newSentence).length <= 150) {
      temp += newSentence;
    } else {
      if (temp !== '') {
        result.push(temp);
      }
      temp = newSentence;
    }
  }

  if (temp !== '' && temp.length <= 150) {
    result.push(temp);
  }

  return result;
}
