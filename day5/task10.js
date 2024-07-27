const func = (fn1, fn2, value) => {
  const result = fn1(value);
  return fn2(result);
};

const square = (x) => x * x;
const qube = (x) => x * x * x;

console.log(func(square, qube, 10));
