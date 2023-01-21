
    function Tribonacci(n){
        let fib=[1,1,1];
        for(i=3;i<n;i++){
            fib[i]=fib[i-1]+fib[i-2]+fib[i-3]
        }
    return fib;
    }
    console.log(Tribonacci(7));
    console.log(Tribonacci(10));