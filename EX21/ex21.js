function mumbling(str){
    arr=str.split(''); 
    console.log(arr);
    let result='' ;
    for (i=0;i<arr.lenght;i++){
   result +=arr[i].toUpperCase()+arr[i].toLowerCase().repeat(i)+'-'  ;
  }
  return result.slice(0,result.length-1);
}
mumbling('abd')
mumbling('RqaEzty')