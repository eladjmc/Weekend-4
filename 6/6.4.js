const isIsoGram = (str) => {
    const strArr = str.toLowerCase().split('');
    for(let i = 0; i < strArr.length ; i++){
        if(strArr.indexOf(strArr[i])!= i){
            return false;
        }
    }
    return true;
} 

console.log(isIsoGram('abgfdewsa'));