const years = [
  1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952,
  1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 1700,
  1800, 1900,
];

for (let i = 0; i < years.length; i++) {
  const year = years[i];
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year!`);
  } else {
    console.log(`${year} is not a leap year!`);
  }
}
