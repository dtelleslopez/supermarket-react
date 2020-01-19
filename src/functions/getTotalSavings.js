import isValidOffer from '../helpers/isValidOffer';
import fixTwoDecimals from '../helpers/fixTwoDecimals';
import isNumber from '../helpers/isNumber';

const getTotalSavings = (offers = []) => {
  if (!Array.isArray(offers)) {
    return 0;
  }

  return offers.reduce((acc, curr) => {
    if (!isValidOffer(curr) || !isNumber(curr.discount)) {
      return acc;
    }

    const totalSavings = (+(curr.discount + acc).toFixed(2));

    return fixTwoDecimals(totalSavings);
  }, 0);
};

export default getTotalSavings;
