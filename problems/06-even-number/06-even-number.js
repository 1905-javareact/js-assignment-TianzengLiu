/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    return (someNum & 1) ? false : true;
  
}

console.log(isEven(7));