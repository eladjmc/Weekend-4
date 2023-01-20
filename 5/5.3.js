const toCamelCase = (string) => {
  let newStr = string.replace(/[^a-z0-9]/gi, " "); //=
  const strArr = newStr.toLowerCase().split(" ");
  newStr = strArr[0];
  strArr.shift();
  strArr.forEach((str) => {
    newStr += str.charAt(0).toUpperCase() + str.slice(1);
  });
  return newStr;
};
console.log(toCamelCase("lala_is-the gratest"));
