import isValidItem from '../isValidItem';

describe('isValidItem function', () => {
  test('It should return false', () => {
    expect(isValidItem(undefined)).toBe(false);
    expect(isValidItem('John')).toBe(false);
    expect(isValidItem(null)).toBe(false);
    expect(isValidItem([])).toBe(false);
    expect(isValidItem({})).toBe(false);
    expect(isValidItem({ name: 'Oranges' })).toBe(false);
    expect(isValidItem({ name: 'Oranges', price: 1.99 })).toBe(false);
    expect(isValidItem({ name: 'Oranges', price: 'John' })).toBe(false);
    expect(isValidItem({ name: 'Oranges', price: 1.99, unit: 'kilo' })).toBe(false);
    expect(isValidItem({
      name: 'Oranges', price: 1.99, unit: 'Doe', quantity: 1,
    })).toBe(false);
  });

  test('It should return true', () => {
    expect(isValidItem({
      name: 'Coke', price: 0.70, unit: 'each', quantity: 1,
    })).toBe(true);
    expect(isValidItem({
      name: 'Oranges', price: 1.99, unit: 'kilo', quantity: 1,
    })).toBe(true);
    expect(isValidItem({
      name: 'Oranges', price: 1.99, unit: 'KILO', quantity: 1,
    })).toBe(true);
  });
});
