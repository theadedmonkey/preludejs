import _or from './internal/_or';
import foldr from './foldr';

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
export default function or(xs) {
  return foldr(_or, false, xs);
}
