import _and from './internal/_and';
import foldr from './foldr';

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
export default function and(xs) {
  return foldr(_and, true, xs);
}
