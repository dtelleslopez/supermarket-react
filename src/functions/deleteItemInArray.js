import isValidProduct from '../helpers/isValidProduct';

const addItemInArray = (array = [], item = {}) => {
  if (!Array.isArray(array)) {
    return [];
  }

  const newArray = [...array];

  if (isValidProduct(item)) {
    return newArray.filter(({ name }) => name !== item.name);
  }

  return newArray;
};

export default addItemInArray;
