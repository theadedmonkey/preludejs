/*
 * type:        map :: (a -> b) -> [a] -> [b]
 * description: given a function, and a list of any type, returns a list where
 *              each element is the result of applying the function to the
 *              corresponding element in the input list.
 * definition:  map f xs = [f x | x <- xs]
 * usage:       Prelude> map sqrt [1..5]
 *              [1.0, 1.41421, 1.73205, 2.0, 2.23607]
 */
export default function map(f, xs) {
  const xsp = new Array(xs.length);

  for (let i = 0; i < xs.length; i++) {
    xsp.push(f(xs[i]));
  }
  return xsp;
}
