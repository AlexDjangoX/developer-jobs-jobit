export function formatSalary(minSalary, maxSalary, currency, period) {
  let perTime;
  let min, max;

  if (period === 'HOUR') {
    perTime = '/ hour';
    min = minSalary;
    max = maxSalary;
  } else {
    perTime = period === 'MONTH' ? '/ month' : '/ year';
    min = Math.round(minSalary / 1000) + 'K';
    max = Math.round(maxSalary / 1000) + 'K';
  }

  return (
    <>
      {`${currency} ${min}-${max} `}
      <span className="text-natural3">{perTime}</span>
    </>
  );
}
