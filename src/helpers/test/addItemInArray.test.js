import addItemInArray from '../addItemInArray';

describe('addItemInArray function', () => {
  test('It should return an empty array', () => {
    expect(addItemInArray([])).toStrictEqual([]);
    expect(addItemInArray([], {})).toStrictEqual([]);
    expect(addItemInArray()).toStrictEqual([]);
    expect(addItemInArray(null, null)).toStrictEqual([]);
    expect(addItemInArray(1.99, 0.70)).toStrictEqual([]);
    expect(addItemInArray(1.99, 'John')).toStrictEqual([]);
    expect(addItemInArray('John', 1.99)).toStrictEqual([]);
    expect(addItemInArray('John', 'Doe')).toStrictEqual([]);
  });

  test('It should return an array with the correct elements', () => {
    const oranges = {
      name: 'Oranges', price: 1.99, unit: 'kilo', quantity: 1,
    };

    const coke = {
      name: 'Coke', price: 0.70, unit: 'each', quantity: 1,
    };

    expect(addItemInArray([], oranges)).toStrictEqual([oranges]);
    expect(addItemInArray([{ ...oranges }], oranges)).toStrictEqual([{ ...oranges, quantity: 2 }]);
    expect(addItemInArray([{ ...coke }], { ...oranges })).toStrictEqual([coke, oranges]);
    expect(addItemInArray([{ ...coke }, { ...oranges }], { ...oranges, quantity: 'John' })).toStrictEqual([coke, oranges]);
    expect(addItemInArray([{ ...coke }, { ...oranges }], { ...oranges, quantity: -5 }))
      .toStrictEqual([coke, { ...oranges, quantity: 1 }]);
    expect(addItemInArray([{ ...coke }, { ...oranges }], { ...oranges, quantity: 5 }))
      .toStrictEqual([coke, { ...oranges, quantity: 6 }]);
  });
});
