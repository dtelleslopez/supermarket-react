import { ADD_PRODUCT } from '../constants/action-types';

// eslint-disable-next-line import/prefer-default-export
export function addProduct(payload) {
  return { type: ADD_PRODUCT, payload };
}
