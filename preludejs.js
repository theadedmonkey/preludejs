var Immutable = require('seamless-immutable');

function add(a, b) {
  return a + b;
};

function head(xs) {
  return xs[0];
};

function tail(xs) {
  return xs.slice(1);
};

function foldr(f, z, xs) {
  return xs.length === 0
    ? z
    : f(head(xs), foldr(f, z, tail(xs)))
};

var words = Immutable(["con", "cat", "en", "ate"]);
console.log(words);
console.log(foldr(add, [], words));
console.log(words);
