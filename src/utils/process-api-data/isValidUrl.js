export function isValidURL(string) {
  if (string?.startsWith('http://')) {
    return null;
  }

  try {
    new URL(string);
    return string;
  } catch (_) {
    return false;
  }
}
