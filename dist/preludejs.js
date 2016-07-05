'use strict';

console.log('ok');
var hello = 1;
/*
function add(a, b) {
  return a + b;
};
*/
/*
function head(xs) {
  return xs[0];
};
*/
/*
function tail(xs) {
  return xs.slice(1);
};
*/
/*
function foldr(f, z, xs) {
  return xs.length === 0
    ? z
    : f(head(xs), foldr(f, z, tail(xs)))
};
*/
/*
 * type:        map :: (a -> b) -> [a] -> [b]
 * description: given a function, and a list of any type, returns a list where
 *              each element is the result of applying the function to the
 *              corresponding element in the input list.
 * definition:  map f xs = [f x | x <- xs]
 * usage:       Prelude> map sqrt [1..5]
 *              [1.0, 1.41421, 1.73205, 2.0, 2.23607]
 */
/*
function map(f, xs) {
 var xs_p = [];
  for ( var i = 0; i < xs.length; i++ ) {
   xs_p.push(f(xs[i]))
 }
 return xs_p;
}
*/

/*
 * && operator as function
 */
/*
function __and(a, b) {
  return a && b;
}
*/

/*
 * || operator as function
 */
/*
function __or(a, b) {
  return a || b;
}
*/

/*
 * type:        and :: [Bool] -> Bool
 * description: takes the logical conjunction of a list of boolean values (see
 *              also ‘or’).
 * definition:  and xs = foldr (&&) True xs
 * usage:       Prelude> and [True, True, False, True]
 *              False
 *              Prelude> and [True, True, True, True]
 *              True
 *              Prelude> and []
 *              True
 */
/*
function and(xs) {
  return foldr(__and, true, xs);
}
*/
/*
 * type:        or :: [Bool] -> Bool
 * description: applied to a list of boolean values, returns their logical
 *              disjunction (see also ‘and’).
 * definition:  or xs = foldr (||) False xs
 * usage:       Prelude> or [False, False, True, False]
 *              True
 *              Prelude> or [False, False, False, False]
 *              False
 *              Prelude> or []
 *              False
 */
/*
function or(xs) {
  return foldr(__or, false, xs);
}
*/

/*
 * type:        all :: (a -> Bool) -> [a] -> Bool
 * description: applied to a predicate and a list, returns True if all elements
 *              of the list satisfy the predicate, and False otherwise. Similar
 *              to the function any.
 * definition:  all p xs = and (map p xs)
 * usage:       Prelude> all (<11) [1..10]
 *              True
 *              Prelude> all isDigit "123abc"
 *              False
 */
/*
function all(p, xs) {
  return and(map(p, xs));
}
*/

/*
 * type:        any :: (a -> Bool) -> [a] -> Bool
 * description: applied to a predicate and a list, returns True if any of
 *              the elements of the list satisfy the predicate, and False
 *              otherwise. Similar to the function all.
 * definition:  any p xs = or (map p xs)
 * usage:       Prelude> any (<11) [1..10]
 *              True
 *              Prelude> any isDigit "123abc"
 *              True
 *              Prelude> any isDigit "alphabetics"
 *              False
 */
/*
function any(p, xs) {
  return or(map(p, xs));
}
*/

/*
var words = Immutable(["con", "cat", "en", "ate"]);
console.log(words);
console.log(foldr(add, [], words));
console.log(words);

console.log(map(function(n) { return n * n }, [1, 2, 3, 4]));

console.log(and([true, true, false]))

console.log(all(function(n) { return n < 5 }, [1, 2, 3, 4, 5]))
console.log(any(function(n) { return n < 5 }, [6, 7, 8, 9, 10]))
*/