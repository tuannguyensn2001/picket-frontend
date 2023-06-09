export const compose =
  <T>(...fns: Array<(arg: T) => T>) =>
  (x: T) =>
    fns.reduceRight((y, f) => f(y), x);
