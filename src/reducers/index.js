import { ADD_PRODUCT } from '../constants/action-types';

const initialState = {
  products: [{
    name: 'Beans',
    price: 0.50,
    unit: 'each',
  }, {
    name: 'Coke',
    price: 0.70,
    unit: 'each',
  }, {
    name: 'Oranges',
    price: 1.99,
    unit: 'kilo',
  }],
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_PRODUCT) {
    return {
      ...state,
      products: state.products.concat(action.payload),
    };
  }
  return state;
}

export default rootReducer;
