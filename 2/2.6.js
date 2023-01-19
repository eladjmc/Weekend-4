const yearsAndCenturies = (year) => year % 100 ? parseInt(year/100)+1 : parseInt(year/100) ;
console.log(yearsAndCenturies(1000));