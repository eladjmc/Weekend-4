const dupeCount = (str) => {
    const charCounter = {};
    const strToArr = str.toLowerCase().split('');
    strToArr.forEach(char => {
        if(!charCounter[char]){
            charCounter[char] = 1;
        } else {
            charCounter[char]++
        }
    });
    return Object.values(charCounter).reduce((acc,curr) => acc < curr ? curr : acc ,0)
}

console.log(dupeCount('ABBAB'));