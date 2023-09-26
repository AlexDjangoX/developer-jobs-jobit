export function formatDateAdded(timestamp) {
  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}
