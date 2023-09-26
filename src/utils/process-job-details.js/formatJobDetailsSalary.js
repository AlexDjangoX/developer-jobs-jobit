export function formatSalary(num) {
    return num > 10000 ? Math.round(num/1000) + 'k' : num;
  }