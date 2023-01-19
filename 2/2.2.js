const makeDecFromBin = (binArray) => {
    let sum = 0;
    let pow = 0;
    for (let i = binArray.length-1 ; i >= 0; i--){
        sum += Math.pow(2,pow) * binArray[i];
        pow++;
    }
    return sum;
}

console.log(makeDecFromBin([1,0,0,0]));