import isNumber from '../isNumber';

describe('isNumber function', () => {
  test('It should return false', () => {
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber('John')).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
  });

  test('It should return true', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(-1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(20)).toBe(true);
  });
});
