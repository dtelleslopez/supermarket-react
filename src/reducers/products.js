import createReducer from '../helpers/createReducer';

const initialState = [{
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
}];

function addProduct(productsState, action) {
  return productsState.concat(action.payload);
}

const productsReducer = createReducer(initialState, {
  ADD_PRODUCT: addProduct,
});

export default productsReducer;
