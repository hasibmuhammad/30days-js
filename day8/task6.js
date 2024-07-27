const sum = (...args) => args.reduce((prev, curr) => prev + curr, 0);

console.log(sum(1, 2, 3, 3, 3, 4));
