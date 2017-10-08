const R = require("rambda");

const result = R.compose(R.filter(R.equals(2)), R.map(R.add(1)))({
  a: 1,
  b: 2,
  c: 3
});

console.log(result);

// add
const add2 = R.add(2);

console.log(add2(3)); //5
console.log(R.add(2, 3)); //5
console.log(R.add(2, add2(2))); //6

const arr = [0, 1, 3, 4, 5];
const fn = n => n >= 0;
const fn2 = n => n > 0;
console.log(R.all(fn, arr)); //true
console.log(R.all(fn2, arr)); //false

const result2 = R.compose(R.map(x => x * 2), R.filter(x => x > 2))([
  1,
  2,
  3,
  4,
  5
]);
console.log(result2);

console.log(R.contains(2, [1, 2])); // => true
console.log(R.contains(3, [1, 2])); // => false

const addFourNumbers = (a, b, c, d) => a + b + c + d;
const curriedAddFourNumbers = R.curry(addFourNumbers);
const f = curriedAddFourNumbers(1, 2);
const g = f(3);
console.log(g(4)); // => 10

console.log(R.path("a.b", { a: { b: 1 } })); // => 1
console.log(R.path(["a", "b"], { a: { b: 2 } })); // => 2
console.log(R.path(["a", "c"], { a: { b: 2 } })); // => undefined

R.pluck("a")([{ a: 1 }, { a: 2 }, { b: 3 }]); // => [1, 2]

const sortFn = (a, b) => a - b;
const sortFn2 = (a, b) => b - a;

console.log(R.sort(sortFn, [3, 1, 2]));

console.log(R.sort(sortFn2, [3, 1, 2]));

console.log(R.values({ a: 1, b: 2 })); // => [1, 2]
