// Simple, given a string of words, return the ​length​ of the shortest word(s). 
// String will never be empty and you do not need 
// to account for different data types

const getShortestLength = (words) => words.split(' ').reduce((acc,word)=> word.length < acc ? word.length : acc ,words.length);
console.log(getShortestLength("lalalalala jfj fdjfgkgfkgkrhrtv safsafa"));