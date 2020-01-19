import offerTypes from '../constants/offerTypes';
import fixTwoDecimals from '../helpers/fixTwoDecimals';

const getAppliedSavings = (items = [], offers = []) => {
  if (!Array.isArray(items)
    || !Array.isArray(offers)
    || items.length === 0
    || offers.length === 0) {
    return [];
  }

  const applied = [];
  const productsWithOffer = offers.map(({ product = {} } = {}) => product.name);

  for (let i = 0; i < items.length; i += 1) {
    if (productsWithOffer.includes(items[i].name)) {
      const offer = offers.find(({ product = {} } = {}) => items[i].name === product.name);

      if (offer) {
        const { price, quantity } = items[i];
        const quantityPrice = quantity * price;

        if (offer.type === offerTypes.THREE_FOR_TWO && items[i].quantity > 2) {
          const offerCount = Math.floor(quantity / 3);
          const offerDiff = quantity % 3;
          const discount = quantityPrice - (((offerCount * 2) * price) + (offerDiff) * price);

          applied.push({ ...offer, discount: fixTwoDecimals(discount) });
        } else if (offer.type === offerTypes.TWO_FOR_AMOUNT && items[i].quantity >= 2) {
          const offerCount = Math.floor(quantity / 2);
          const offerDiff = quantity % 2;
          const discount = quantityPrice - (offerCount + (offerDiff * price));

          applied.push({ ...offer, discount: fixTwoDecimals(discount) });
        }
      }
    }
  }

  return applied;
};

export default getAppliedSavings;
