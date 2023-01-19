// Can be one line but it is too long.
const findUniqueNumber = (numbersArr) => {
  const newArr = numbersArr.filter((number) => number !== numbersArr[0]);
  return newArr.length > 1 ? numbersArr[0] : newArr[0]
};
console.log(findUniqueNumber([1, 1, 1, 2, 1, 1 ]));
