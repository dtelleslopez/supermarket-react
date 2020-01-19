import getSubTotal from '../getSubTotal';
import mockProducts from '../../mock/products';

describe('getSubTotal function', () => {
  const coke = { ...mockProducts[1], quantity: 1 };
  const oranges = { ...mockProducts[2], quantity: 1 };

  test('It should return 0', () => {
    expect(getSubTotal()).toBe(0);
    expect(getSubTotal(null)).toBe(0);
    expect(getSubTotal(undefined)).toBe(0);
    expect(getSubTotal({})).toBe(0);
    expect(getSubTotal('John')).toBe(0);
    expect(getSubTotal(1.99)).toBe(0);
    expect(getSubTotal([])).toBe(0);
    expect(getSubTotal([{ ...coke, price: 'John' }])).toBe(0);
    expect(getSubTotal([{ ...coke, quantity: 'John' }])).toBe(0);
    expect(getSubTotal([{ ...coke, price: null }])).toBe(0);
    expect(getSubTotal([{ ...coke, quantity: null }])).toBe(0);
    expect(getSubTotal([{ ...coke, price: -1.99 }])).toBe(0);
    expect(getSubTotal([{ ...coke, price: 'John', quantity: 'Doe' }])).toBe(0);
    expect(getSubTotal([{ ...coke, price: null, quantity: null }])).toBe(0);
    expect(getSubTotal([{ ...coke, price: [], quantity: {} }])).toBe(0);
  });

  test('It should return the correct amount', () => {
    expect(getSubTotal([coke])).toBe(0.70);
    expect(getSubTotal([coke, coke, coke])).toBe(2.10);
    expect(getSubTotal([coke, oranges])).toBe(2.69);
  });
});
