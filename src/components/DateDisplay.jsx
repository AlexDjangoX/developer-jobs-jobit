import React from 'react';

const DateDisplay = ({ styles }) => {
  const date = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return <div className={styles}>{formattedDate}</div>;
};

export default DateDisplay;
