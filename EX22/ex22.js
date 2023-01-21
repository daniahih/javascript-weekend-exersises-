function countingDuplicate(str){
    let result={};
    for(i=0;i<str.length;i++){
        let char=str.charAt(i);
        if(result[char]){
            result[char]++;
        }
        else{
            result[char]=1;
        }
    }
    return result;
}

console.log(countingDuplicate("aabbccddst"));