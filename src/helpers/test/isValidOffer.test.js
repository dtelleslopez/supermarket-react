import isValidOffer from '../isValidOffer';
import mockProducts from '../../mock/products';

describe('isValidOffer function', () => {
  test('It should return false', () => {
    expect(isValidOffer(undefined)).toBe(false);
    expect(isValidOffer('John')).toBe(false);
    expect(isValidOffer(null)).toBe(false);
    expect(isValidOffer([])).toBe(false);
    expect(isValidOffer({})).toBe(false);
    expect(isValidOffer({ name: 'Beans 3 for 2' })).toBe(false);
    expect(isValidOffer({ name: 'Beans 3 for 2', product: mockProducts[0] })).toBe(false);
  });

  test('It should return true', () => {
    expect(isValidOffer({
      name: 'Beans 3 for 2', product: { ...mockProducts[0], quantity: 0 }, type: 'THREE_FOR_TWO',
    })).toBe(true);
    expect(isValidOffer({
      name: 'Beans 3 for 2', product: { ...mockProducts[0], quantity: 0 }, type: 'three_for_two',
    })).toBe(true);
    expect(isValidOffer({
      name: 'Coke 2 for £1', product: { ...mockProducts[1], quantity: 0 }, type: 'TWO_FOR_AMOUNT',
    })).toBe(true);
  });
});
