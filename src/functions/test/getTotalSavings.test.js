import getTotalSavings from '../getTotalSavings';
import mockOffers from '../../mock/offers';

describe('getTotalSavings function', () => {
  const beansOffer = mockOffers[0];
  const cokeOffer = mockOffers[1];

  test('It should return 0', () => {
    expect(getTotalSavings()).toBe(0);
    expect(getTotalSavings(null)).toBe(0);
    expect(getTotalSavings(undefined)).toBe(0);
    expect(getTotalSavings({})).toBe(0);
    expect(getTotalSavings('John')).toBe(0);
    expect(getTotalSavings(199)).toBe(0);
    expect(getTotalSavings([])).toBe(0);
    expect(getTotalSavings([{ ...cokeOffer }])).toBe(0);
    expect(getTotalSavings([{ ...cokeOffer, discount: undefined }])).toBe(0);
    expect(getTotalSavings([{ ...cokeOffer, discount: 'John' }])).toBe(0);
    expect(getTotalSavings([{ ...cokeOffer, discount: [] }])).toBe(0);
    expect(getTotalSavings([{ ...cokeOffer, discount: {} }])).toBe(0);
  });

  test('It should return the correct amount', () => {
    expect(getTotalSavings([{ ...cokeOffer, discount: 50 }])).toBe(50);
    expect(getTotalSavings([{
      ...cokeOffer,
      discount: 50,
    }, {
      ...beansOffer,
      discount: 40,
    }])).toBe(90);
    expect(getTotalSavings([{
      ...cokeOffer,
      discount: 50,
    }, {
      ...beansOffer,
      discount: 'John',
    }])).toBe(50);
    expect(getTotalSavings([{ ...cokeOffer, discount: 50 }])).toBe(50);
  });
});
