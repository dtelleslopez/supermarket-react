import fixTwoDecimals from '../fixTwoDecimals';

describe('isNumber function', () => {
  test('It should return 0', () => {
    expect(fixTwoDecimals(undefined)).toBe(0);
    expect(fixTwoDecimals([])).toBe(0);
    expect(fixTwoDecimals({})).toBe(0);
    expect(fixTwoDecimals('John')).toBe(0);
    expect(fixTwoDecimals(true)).toBe(0);
  });

  test('It should return the correct amount', () => {
    expect(fixTwoDecimals(1)).toBe(1);
    expect(fixTwoDecimals(1.99)).toBe(1.99);
    expect(fixTwoDecimals(0.70)).toBe(0.70);
    expect(fixTwoDecimals(0.7999)).toBe(0.80);
    expect(fixTwoDecimals(0.621234)).toBe(0.62);
  });
});
