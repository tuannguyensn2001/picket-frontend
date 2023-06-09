import { compose } from './compose';

describe('compose', () => {
  it('should return expect value', function () {
    const increment = (x: number): number => x + 1;
    const double = (x: number): number => x * 2;
    const square = (x: number): number => x ** 2;

    const fn = compose(increment, double, square);

    expect(fn(3)).toBe(19);
  });
});
