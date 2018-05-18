// index 6
// 0 1 1 2 3 5 8 ->

// fib :: Number -> Number
// boring way
const fib = n => {
  let prev = 0;
  let next = 1;

  for (var i = 0; i < n; i++) {
    const temp = prev + next;
    prev = next;
    next = temp;
  }
  return next;
};

//one liner with recursion
const fibrr = ({ n = 0, prev = 0, next = 1 } = {}) =>
  n == 0 ? next : fibrr({ n: n - 1, prev: next, next: prev + next });

//closure with recursion
function fibRec(n) {
  const fibr = ({ prev = 0, next = 1 } = {}) => {
    n -= 1;
    return n >= 0 ? fibr({ prev: next, next: prev + next }) : next;
  };
  return fibr();
}

// recursion
const factorialRec = ({ n = 1, result = 1 } = {}) =>
  n !== 0 ? factorial({ n: n - 1, result: result * n }) : result;

// boring way
const factorial = n => {
  let result = 0;
  while (n > 0) {
    result = result !== 0 ? result * n : n;
    n -= 1;
  }
  return result;
};

console.log("Fibonnaci: ");
console.log(fib(5));
console.log("      ----");
console.log(fibRec(5));
console.log("      ----");
console.log(fibrr({ n: 5 }));
console.log("      ----");
console.log("Factorial: ");
console.log(factorialRec({ n: 5 }));
console.log("      ----");
console.log(factorial(5));
