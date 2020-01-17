const getSubTotal = (items = []) => {
  if (!Array.isArray(items)) {
    return 0;
  }

  return items.reduce((acc, curr) => (+((curr.price * curr.quantity) + acc).toFixed(2)), 0);
};

export default getSubTotal;

// TODO: MAKE TEST AND USE KILOGRAMS ALSO
