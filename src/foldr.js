import head from './head';
import tail from './tail';

/*
 * type:        foldr :: (a -> b -> b) -> b -> [a] -> b
 * description: folds up a list, using a given binary operator and a given
 *              start value, in a right associative manner.
 * definition:  foldr f z [] = z
 *              foldr f z (x:xs) = f x (foldr f z xs)
 * usage:       Prelude> foldr (++) [] ["con", "cat", "en", "ate"]
 *              "concatenate"
 */
export default function foldr(f, z, xs) {
  return xs.length === 0
    ? z
    : f(head(xs), foldr(f, z, tail(xs)));
}
