import offerTypes from '../constants/offerTypes';

const getAppliedSavings = (items = [], offers = []) => {
  if (!Array.isArray(items)
    || !Array.isArray(offers)
    || items.length === 0
    || offers.length === 0) {
    return [];
  }

  const productsWithOffer = offers.map(({ product = {} } = {}) => product.name);

  for (let i = 0; i < items.length; i += 1) {
    if (productsWithOffer.includes(items[i].name)) {
      const offer = offers.find(({ product = {} } = {}) => items[i].name === product.name);

      if (offer && offer.type === offerTypes.THREE_FOR_TWO) {
        // TODO: APPLY OFFER AND TEST
      }
    }
  }

  return [];
};

export default getAppliedSavings;
