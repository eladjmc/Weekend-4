const calculator = {
    '*' : multiply = (num1, num2) => num1 * num2,
    '+' : add = (num1, num2) => num1 + num2,
    '-' : subtract = (num1, num2) => num1 - num2,
    '/' : divide = (num1, num2) => (num1 === 0 ? "Error" : (num1 / num2).toFixed(3)),
}
const basicMath = (op, num1, num2) => calculator[op](num1,num2);

console.log(basicMath('/',5,7));
