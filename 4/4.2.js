const tribMemo = {};

const tribonacci = (sig,number) => {
  if (number <= 2) {
    return sig[number];
  }
  if (tribMemo[number]) {
    return tribMemo[number];
  }
  tribMemo[number] =
    tribonacci(sig,number - 3) + tribonacci(sig,number - 2) + tribonacci(sig,number - 1);
  return tribMemo[number];
};

const getTribonacciSequence = (sig, n) => {
  const arr = [];
  if(!n){
    return arr;
  }

  for (let i = 0; i <= n; i++) {
    arr.push(tribonacci(sig,i));
  }

  return arr;
};

console.log(getTribonacciSequence([1,1,1],5));
