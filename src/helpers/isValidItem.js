import isNumber from './isNumber';
import unitTypes from '../constants/unitTypes';

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
  && [unitTypes.EACH, unitTypes.KILO].includes(item.unit.toUpperCase())
  && isNumber(item.quantity);

export default isValidItem;
