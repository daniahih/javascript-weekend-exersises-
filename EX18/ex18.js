function mask(str){
    if(str.length >= 4)
    return '#'.repeat(str.length-4) + str.slice(str.length-4,str.length);
else
    return str;

}
 console.log(mask("Skippy"));
 console.log(mask("52366488889"));
console.log(mask("daniahih310"));