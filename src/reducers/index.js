import { combineReducers } from 'redux';
import productsReducer from './products';
import basketReducer from './basket';
import savingsReducer from './savings';

const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  savings: savingsReducer,
});

export default rootReducer;
