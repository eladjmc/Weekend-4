const summation = (number) => {
    const numbersBefore =[];
    for(let i = 1; i <=number; i++) {
        numbersBefore.push(i);
    } 
    return numbersBefore.reduce((acc,cur) => cur+acc ,0);
} 
console.log(summation(8));