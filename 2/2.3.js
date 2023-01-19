const nextPerfectSquare = (squareNum) => Number.isInteger(Math.sqrt(squareNum)) ? Math.pow(Math.sqrt(squareNum)+1,2) : -1;
console.log(nextPerfectSquare(625));