/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
//Recursive:
function fib(n) {

    if (n <= 1) return 1;
    
    if (isNaN(n)) {
        throw "Opps, n has to be a number."
    }

    if (n === Infinity) {
        throw {message:"Please try again!"}
    }

    return fib(n - 1) + fib(n - 2);

}

//Test
console.log(fib(5))