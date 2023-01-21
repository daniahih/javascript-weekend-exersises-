function findlongest(str){
    let arr = str.split(" ").sort((a, b) =>  b.length -a.length );
    return arr[0].length
  }
 console.log(findlongest("dania hih from another side")) ;