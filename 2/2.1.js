// this will work even if the numbers from the array aren't positive as long as there are 2 or more positive numbers
const sumLowestTwoInts = (arrOfNumbers) => {
  let num1 = arrOfNumbers.reduce((acc,curr)=> curr > acc ? curr : acc ,0);
  let num2;
  arrOfNumbers.filter((num) => num > 0).forEach((number, index) => {
      if (number < num1) {
        num2 = num1;
        num1 = number;
      }
    });
  return num1 + num2;
};

console.log(sumLowestTwoInts([-22,67,4,32,11,-987,2]));