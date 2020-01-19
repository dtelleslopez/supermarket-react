import isValidProduct from '../helpers/isValidProduct';

const addItemInArray = (array = [], item = {}) => {
  if (!Array.isArray(array)) {
    return [];
  }

  const newArray = [...array];

  if (isValidProduct(item) && item.quantity > 0) {
    const index = newArray.findIndex(({ name }) => name === item.name);

    if (index > -1) {
      newArray[index].quantity += item.quantity;
    } else {
      newArray.push({ ...item });
    }
  }

  return newArray;
};

export default addItemInArray;
