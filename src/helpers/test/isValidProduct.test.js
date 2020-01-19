import isValidProduct from '../isValidProduct';

describe('isValidProduct function', () => {
  test('It should return false', () => {
    expect(isValidProduct(undefined)).toBe(false);
    expect(isValidProduct('John')).toBe(false);
    expect(isValidProduct(null)).toBe(false);
    expect(isValidProduct([])).toBe(false);
    expect(isValidProduct({})).toBe(false);
    expect(isValidProduct({ name: 'Oranges' })).toBe(false);
    expect(isValidProduct({ name: 'Oranges', price: 1.99 })).toBe(false);
    expect(isValidProduct({ name: 'Oranges', price: 'John' })).toBe(false);
    expect(isValidProduct({ name: 'Oranges', price: 1.99, unit: 'kilo' })).toBe(false);
    expect(isValidProduct({
      name: 'Oranges', price: 1.99, unit: 'Doe', quantity: 1,
    })).toBe(false);
  });

  test('It should return true', () => {
    expect(isValidProduct({
      name: 'Coke', price: 0.70, unit: 'each', quantity: 1,
    })).toBe(true);
    expect(isValidProduct({
      name: 'Oranges', price: 1.99, unit: 'kilo', quantity: 1,
    })).toBe(true);
    expect(isValidProduct({
      name: 'Oranges', price: 1.99, unit: 'KILO', quantity: 1,
    })).toBe(true);
  });
});
