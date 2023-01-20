// Given a string of words, return the longest word[s]. 
// String will never be empty and you do not need to account 
// for different data types.   

const getLongestWord = (words) => words.split(' ').reduce((acc,word)=> word.length > acc.length ? word : acc ,'');
console.log(getLongestWord("lalasdsadsadaalalala jfj fdjfgkgfkgkrhrtv safsafa"));