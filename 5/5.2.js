// Write a function called repeat_str which repeats the given string src exactly count times. 
// repeatStr(6, "I") // "IIIIII" 
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello

const repeat_str = (count,string) => {
    let newStr = '';
    for (let i=0 ; i < count ; i++){
        newStr += string;
    }
    return newStr;
}
console.log(repeat_str(5,'Elad'));