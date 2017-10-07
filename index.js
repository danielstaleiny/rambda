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
