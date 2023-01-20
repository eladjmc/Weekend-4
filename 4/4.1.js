const fibMemo = {};
const fibonacci = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  }
  if (fibMemo[number]) {
    return fibMemo[number];
  }
  fibMemo[number] = fibonacci(number - 2) + fibonacci(number - 1);
  return fibMemo[number];
};

console.log(fibonacci(8));