function Binary(array){
    let newarray=array.join("");
   return parseInt(newarray,2)
}
 console.log(Binary([0,0,1,1]));
 console.log(Binary([1,1,0,1]));
 console.log(Binary([1,1,1,1]));
 