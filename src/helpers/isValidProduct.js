import isNumber from './isNumber';
import unitTypes from '../constants/unitTypes';

const isValidProduct = (product) => product !== undefined
  && product !== null
  && !Array.isArray(product)
  && typeof product === 'object'
  && Object.keys(product).length > 0
  && Object.keys(product).includes('name')
  && Object.keys(product).includes('price')
  && Object.keys(product).includes('unit')
  && Object.keys(product).includes('quantity')
  && typeof product.name === 'string'
  && isNumber(product.price)
  && product.price > 0
  && typeof product.unit === 'string'
  && [unitTypes.EACH, unitTypes.KILO].includes(product.unit.toUpperCase())
  && isNumber(product.quantity);

export default isValidProduct;
