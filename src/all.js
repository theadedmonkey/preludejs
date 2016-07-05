import map from './map';
import and from './and';

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
export default function all(p, xs) {
  return and(map(p, xs));
}
