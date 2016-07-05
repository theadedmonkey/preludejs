/*
 * type:        tail :: [a] -> [a]
 * description: applied to a non–empty list, returns the list without its
 *              first element.
 * definition:  tail (_:xs) = xs
 * usage:       Prelude> tail [1,2,3]
 *              [2,3]
 */
export default function tail(xs) {
  return xs.slice(1);
}
