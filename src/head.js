/*
 * type:        head :: [a] -> a
 * description: returns the first element of a non–empty list. If applied to
 *              an empty list an error results.
 * definition:  head (x:_) = x
 * usage:       Prelude> head [1..10]
 *              1
 */
export default function head(xs) {
  return xs[0];
}
