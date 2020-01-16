import unitType from '../unitType';

describe('unitType function', () => {
  test('It should return an empty string', () => {
    expect(unitType(undefined)).toBe('');
    expect(unitType(null)).toBe('');
    expect(unitType({})).toBe('');
    expect(unitType([])).toBe('');
    expect(unitType('grams')).toBe('');
    expect(unitType('John')).toBe('');
    expect(unitType(3.14)).toBe('');
    expect(unitType(new Date())).toBe('');
  });

  test('It should return the correct type of unit', () => {
    expect(unitType('kilo')).toBe('/Kg');
    expect(unitType('Kilo')).toBe('/Kg');
    expect(unitType('KILO')).toBe('/Kg');
  });
});
