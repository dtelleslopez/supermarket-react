import deleteItemInArray from '../deleteItemInArray';
import mockProducts from '../../mock/products';

describe('deleteItemInArray function', () => {
  test('It should return an empty array', () => {
    expect(deleteItemInArray([])).toStrictEqual([]);
    expect(deleteItemInArray([], {})).toStrictEqual([]);
    expect(deleteItemInArray()).toStrictEqual([]);
    expect(deleteItemInArray(null, null)).toStrictEqual([]);
    expect(deleteItemInArray(1.99, 0.70)).toStrictEqual([]);
    expect(deleteItemInArray(1.99, 'John')).toStrictEqual([]);
    expect(deleteItemInArray('John', 1.99)).toStrictEqual([]);
    expect(deleteItemInArray('John', 'Doe')).toStrictEqual([]);
  });

  test('It should return an array with the correct elements', () => {
    const coke = { ...mockProducts[1], quantity: 1 };
    const oranges = { ...mockProducts[2], quantity: 1 };

    expect(deleteItemInArray([], oranges)).toStrictEqual([]);
    expect(deleteItemInArray([{ ...oranges }], oranges)).toStrictEqual([]);
    expect(deleteItemInArray([{ ...coke }], { ...oranges })).toStrictEqual([coke]);
    expect(deleteItemInArray([{ ...coke }, { ...oranges }], { ...oranges, quantity: 'John' })).toStrictEqual([coke, oranges]);
    expect(deleteItemInArray([{ ...coke }, { ...oranges }], { ...oranges, quantity: -5 }))
      .toStrictEqual([coke]);
    expect(deleteItemInArray([{ ...coke }, { ...oranges }], { ...oranges, quantity: 5 }))
      .toStrictEqual([coke]);
  });
});
