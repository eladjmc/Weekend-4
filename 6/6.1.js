const accum = (str) => {
  if (!str) {
    return str;
  }
  str = str.toUpperCase();
  let newStr = str.charAt(0);
  for (let i = 1; i < str.length; i++) {
    newStr+= '-' + str.charAt(i);
    for (let j = 0; j < i; j++) {
        newStr += str.charAt(i).toLowerCase();    
    }
  }
  return newStr;
};
console.log(accum("cas"));
