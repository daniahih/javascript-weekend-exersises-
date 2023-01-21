const array=[];
function SumOfLowestNumbers(array){
    let sortedArray= array.sort((a,b)=> a-b).slice(0,2)
    console.log(sortedArray)
    let sum = sortedArray[0]+sortedArray[1];
    console.log(sum)

}
SumOfLowestNumbers([15,10,2,6,4,9,7,3])
