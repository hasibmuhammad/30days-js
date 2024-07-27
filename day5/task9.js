const higherOrder = (fn, number) => {
  for (let i = 0; i < number; i++) {
    fn(i + 1);
  }
};

higherOrder((num) => console.log(num), 10);
