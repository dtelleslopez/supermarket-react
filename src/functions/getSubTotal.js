import isValidItem from '../helpers/isValidItem';

const getSubTotal = (items = []) => {
  if (!Array.isArray(items)) {
    return 0;
  }

  return items.reduce((acc, curr) => {
    if (!isValidItem(curr)) {
      return acc;
    }

    return (+((curr.price * curr.quantity) + acc).toFixed(2));
  }, 0);
};

export default getSubTotal;
