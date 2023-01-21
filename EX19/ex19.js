function findShort(str){
    let arr = str.split(" ").sort((a, b) => a.length - b.length);
    return arr[0].length
  }
 console.log(findShort("dania hih from another side")) ;