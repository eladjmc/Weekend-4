const calculator = {
    '*' : (num1, num2) => num1 * num2,
    '+' : (num1, num2) => num1 + num2,
    '-' : (num1, num2) => num1 - num2,
    '/' : (num1, num2) => (num1 === 0 ? null : (num1 / num2).toFixed(3)),
}
const basicMath = (op, num1, num2) => calculator[op](num1,num2);

console.log(basicMath('/',5,7));
