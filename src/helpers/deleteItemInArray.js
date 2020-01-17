import isValidItem from './isValidItem';

const addItemInArray = (array = [], item = {}) => {
  if (!Array.isArray(array)) {
    return [];
  }

  const newArray = [...array];

  if (isValidItem(item)) {
    return newArray.filter(({ name }) => name !== item.name);
  }

  return newArray;
};

export default addItemInArray;
