function repeat_str (n,string){
    let temp = '';
    for (i=0;i<n;i++){
        temp+= string;
    }
   return temp
}
 console.log(repeat_str (6, "I"));
console.log(repeat_str(5, "Hello"));
