import _concatenate from './internal/_concatenate';
import foldr from './foldr';
/*
 * type:        concat :: [[a]] -> [a]
 * description: applied to a list of lists, joins them together using the ++
 *              operator.
 * definition:  concat xs = foldr (++) [] xs
 * usage:       Prelude> concat [[1,2,3], [4], [], [5,6,7,8]]
 *              [1, 2, 3, 4, 5, 6, 7, 8]
 */
export default function concat(xs) {
  return foldr(_concatenate, [], xs);
}
