const longest = (s1,s2) => {
    const arrOfDistinctChars = {};
    s1.toLowerCase().split('').forEach(char => {
        if(!arrOfDistinctChars[char]){
            arrOfDistinctChars[char]=char;
        }
    });
    s2.toLowerCase().split('').forEach(char => {
        if(!arrOfDistinctChars[char]){
            arrOfDistinctChars[char]=char;
        }
    });
    return Object.values(arrOfDistinctChars).sort().join('');
}
console.log(longest('abcdeFgh','abczxlp'));