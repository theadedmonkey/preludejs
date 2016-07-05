import map from './map';
import or from './or';

/*
 * type:        any :: (a -> Bool) -> [a] -> Bool
 * description: applied to a predicate and a list, returns True if any of
 *              the elements of the list satisfy the predicate, and False
 *              otherwise. Similar to the function all.
 * definition:  any p xs = or (map p xs)
 * usage:       Prelude> any (<11) [1..10]
 *              T
 *              Prelude> any isDigit "123abc"
 *              True
 *              Prelude> any isDigit "alphabetics"
 *              False
 */
export default function any(p, xs) {
  return or(map(p, xs));
}
