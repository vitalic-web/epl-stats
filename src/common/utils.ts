const getSeasonYears = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return `${startDate.getFullYear()} - ${endDate.getFullYear()}`;
};

const test = () => console.log('test');

export {
  getSeasonYears,
  test,
};
