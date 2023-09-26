export function jobLevel(inputString) {
  let dataString = inputString.toLowerCase();
  if (dataString.includes('junior')) return 'Junior';
  if (dataString.includes('senior')) return 'Senior';
  if (dataString.includes('executive')) return 'Executive';
  if (dataString.includes('manager')) return 'Manager';
  if (dataString.includes('team lead')) return 'Team Leader';
  return 'No details';
}
