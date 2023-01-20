const toWeirdCase = (string) => string.split('').reduce((acc,char,index)=> index % 2 ? acc+char.toLowerCase() : acc+char.toUpperCase() ,''); 

console.log(toWeirdCase("Weird string case"));