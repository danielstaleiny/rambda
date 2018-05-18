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

// async best practices
// express route handler

const awaitHandlerFactory = middleware => {
  return async (req, res, next) => {
    try {
      await middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

app.get(
  "/",
  awaitHandlerFactory(async (request, response) => {
    const result = await getContent();
    response.send(result);
  })
);

// paralel execution

async function main() {
  const [user, product] = await Promise.all([
    Users.fetch(userId),
    Products.fetch(productId)
  ]);
  await makePurchase(user, product);
}

// or better
async function main() {
  const users = Users.fetch(userId);
  const products = Products.fetch(productId);
  await makePurchase(await users, await products);
}

// Composing Higher -Order Components

// Loader

// Error

// Default

// Data

// MorkData

// Logger

// Props

const hasProps = injectedProps => WrappedComponent => {
  const HasProps = props => <WrappedComponent {...injectedProps} {...props} />;
  return HasProps;
};

//use
hasProps({ sample: "Sample Prop" })(Component);

//logger
const hasLogger = (prefix = "") => WrappedComponent => {
  const HasLogger = props => {
    console.log(`${prefix}[Props]:`, props);
    return <WrappedComponent {...props} />;
  };

  return HasLogger;
};
// use
hasLogger(component);

// HOC Logic

const higherOrderComponent = toManipulate => WrappedComponent => {
  //depends on if it is function, object or something else
  // do something with toManipulate
  // toManipulate()
  // add toManipulate results
  const HigherOrderComponent = props => (
    <WrappedComponent {...toManipulate} {...props} />
  );
};

const EnhancedComponent = higherOrderComponent(WrappedComponent);

var compose = (...fns) => {
  // pull off the last two arguments
  var [fn1, fn2, ...rest] = fns.reverse();

  var composedFn = (...args) => fn2(fn1(...args));

  if (rest.length == 0) return composedFn;

  return compose(...rest.reverse(), composedFn);
};

var partialRight = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...laterArgs, ...presetArgs);

var partial = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...presetArgs, ...laterArgs);

var reverseArgs = fn => (...args) => fn(...args.reverse());

var curry = (fn, arity = fn.length, nextCurried) =>
  (nextCurried = prevArgs => nextArg => {
    var args = [...prevArgs, nextArg];

    if (args.length >= arity) {
      return fn(...args);
    } else {
      return nextCurried(args);
    }
  })([]);

// hocFactory:: W : React.Component => E: React.Component

// To access methods of the wrappedComponent
function refsHOC(WrappedComponent) {
  return class RefsHOC extends React.Component {
    proc(wrappedComponentInstance) {
      wrappedComponentInstance.method();
    }

    render() {
      const props = Object.assign({}, this.props, {
        ref: this.proc.bind(this)
      });
      return <WrappedComponent {...props} />;
    }
  };
}

// fibonaci by index
// fibonaci by what is the result by index

// exports
// node stack, heap
