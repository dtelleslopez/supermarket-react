import getAppliedSavings from '../getAppliedSavings';
import mockProducts from '../../mock/products';
import mockOffers from '../../mock/offers';

describe('getAppliedSavings function', () => {
  const beans = { ...mockProducts[0], quantity: 1 };
  const coke = { ...mockProducts[1], quantity: 1 };
  const oranges = { ...mockProducts[2], quantity: 1 };

  const beansOffer = mockOffers[0];
  const cokeOffer = mockOffers[1];

  test('It should return an empty array', () => {
    expect(getAppliedSavings()).toStrictEqual([]);
    expect(getAppliedSavings(null, null)).toStrictEqual([]);
    expect(getAppliedSavings(undefined)).toStrictEqual([]);
    expect(getAppliedSavings({}, {})).toStrictEqual([]);
    expect(getAppliedSavings([], [])).toStrictEqual([]);
    expect(getAppliedSavings([coke, oranges], [])).toStrictEqual([]);
    expect(getAppliedSavings([beans, coke, oranges], [beansOffer, cokeOffer])).toStrictEqual([]);
    expect(getAppliedSavings([{ ...coke, quantity: 'John' }], [cokeOffer]))
      .toStrictEqual([]);
    expect(getAppliedSavings(
      [{ ...coke, quantity: 5 }, { ...beans, quantity: 'John' }, { ...oranges, quantity: 5 }],
      [cokeOffer, beansOffer],
    )).toStrictEqual([{ ...cokeOffer, discount: 0.80 }]);
  });

  test('It should return the correct amount', () => {
    expect(getAppliedSavings([{ ...coke, quantity: 2 }], [cokeOffer]))
      .toStrictEqual([{ ...cokeOffer, discount: 0.40 }]);
    expect(getAppliedSavings([{ ...coke, quantity: 4 }], [cokeOffer]))
      .toStrictEqual([{ ...cokeOffer, discount: 0.80 }]);
    expect(getAppliedSavings([{ ...coke, quantity: 5 }, { ...beans, quantity: 3 }], [cokeOffer]))
      .toStrictEqual([{ ...cokeOffer, discount: 0.80 }]);
    expect(getAppliedSavings(
      [{ ...coke, quantity: 5 }, { ...beans, quantity: 3 }],
      [cokeOffer, beansOffer],
    )).toStrictEqual([{ ...cokeOffer, discount: 0.80 }, { ...beansOffer, discount: 0.50 }]);
    expect(getAppliedSavings(
      [{ ...coke, quantity: 5 }, { ...beans, quantity: 3 }, { ...oranges, quantity: 5 }],
      [cokeOffer, beansOffer],
    )).toStrictEqual([{ ...cokeOffer, discount: 0.80 }, { ...beansOffer, discount: 0.50 }]);
  });
});
