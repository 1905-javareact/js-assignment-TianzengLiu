/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
//Recursive:
function fib(n) {
    if (n <= 1) return 1;

    return fib(n - 1) + fib(n - 2);

}