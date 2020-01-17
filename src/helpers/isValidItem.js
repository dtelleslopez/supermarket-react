import isNumber from './isNumber';

const isValidItem = (item) => item !== undefined
  && item !== null
  && !Array.isArray(item)
  && typeof item === 'object'
  && Object.keys(item).length > 0
  && Object.keys(item).includes('name')
  && Object.keys(item).includes('price')
  && Object.keys(item).includes('unit')
  && Object.keys(item).includes('quantity')
  && typeof item.name === 'string'
  && isNumber(item.price)
  && item.price > 0
  && typeof item.unit === 'string'
  && ['each', 'kilo'].includes(item.unit.toLowerCase())
  && isNumber(item.quantity);

export default isValidItem;
