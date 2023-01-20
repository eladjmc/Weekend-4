const initialsName = (fullName) => fullName.split(' ').reduce((acc,cur, index) => index ? acc+'.'+cur.charAt(0).toUpperCase() :acc+cur.charAt(0).toUpperCase() ,'');

console.log(initialsName('elad harel'));