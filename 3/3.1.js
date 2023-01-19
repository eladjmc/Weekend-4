const yearsToGrow = (p0, percent, aug, p) => {
  if (p0 + p0 * (percent/100) + aug < p0) {
    return 0;
  }
  if (p0 >= p) {
    return 0;
  }
  return 1 + yearsToGrow(p0 + p0 * (percent/100) + aug, percent,aug, p);
};
console.log(yearsToGrow(1500000, 2.5, -10000, 2000000));
