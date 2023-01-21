function centuryFromYear(num) {
    if(num % 10 == 0)
        return num/100;
    else
        return Math.floor((num/100)+1);
}

console.log(centuryFromYear(1705));  //1705/100=17.05 +1 floor aproximate to the nerlest number= 18
console.log(centuryFromYear(1900));
console.log(centuryFromYear(900));
console.log(centuryFromYear(501));