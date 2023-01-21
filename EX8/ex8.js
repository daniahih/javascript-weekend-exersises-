function basicMath(string,value1,value2){
    let result;
    switch(string) {
        case ("+"):
          return (value1+value2)
         
          break;
        case ("-"):
            return (value1-value2)
          break;
          case ("*"):
            return(value1*value2)
          break;
          case ("/"):
            return (value1/value2)
          break;

        default:
          // code block
      } 
}
 console.log(basicMath("+",6,4))
 console.log(basicMath("-",6,4))
 console.log(basicMath("*",6,4))
 console.log(basicMath("/",6,4))