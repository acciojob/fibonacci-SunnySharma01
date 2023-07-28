function fibonacci(num) {
  if (num < 0 || num > 50) {
    throw new Error("Input should be between 0 and 50");
  }

  // Create a memoization object to store computed Fibonacci numbers
  const memo = {};

  function fib(n) {
    if (n in memo) {
      return memo[n];
    }

    if (n <= 1) {
      return n;
    }

    // Calculate the Fibonacci number using recursion and store it in the memoization object
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  }

  return fib(num);
}
	
// your code here
}

module.exports = fibonacci;
