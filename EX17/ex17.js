function abbreviateTwoWords (str) {
    let Arr = str.split(' ');
    console.log(Arr)
    return Arr[0][0].toUpperCase() + '.' + Arr[1][0].toUpperCase();
}

console.log(abbreviateTwoWords('Sam Harris'));
console.log(abbreviateTwoWords('Patrick Feeney'));