import isValidItem from '../helpers/isValidItem';

const addItemInArray = (array = [], item = {}) => {
  if (!Array.isArray(array)) {
    return [];
  }

  const newArray = [...array];

  if (isValidItem(item) && item.quantity > 0) {
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
