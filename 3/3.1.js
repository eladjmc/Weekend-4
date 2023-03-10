const yearsToGrow = (p0, percent, aug, p) => {
  const growthInPercentage = Math.floor(p0 * (percent / 100));
  const totalPopulationChanges = p0 +growthInPercentage + aug

  // I know it might look like this is not needed but try to use the input: (1500000, 2.5, -100000, 2000000) with and without it and you will see
  if (totalPopulationChanges < p0) {
    return 0;
  }

  if (p0 >= p) {
    return 0;
  }
  return (
    1 +
    yearsToGrow(totalPopulationChanges, percent, aug, p)
  );
};
console.log(yearsToGrow(1500000, 2.5, 10000, 2000000));
