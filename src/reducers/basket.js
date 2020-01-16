import createReducer from '../helpers/createReducer';

const initialState = [];

function addItem(basketState, action) {
  return basketState.concat(action.payload);
}

const basketReducer = createReducer(initialState, {
  ADD_ITEM: addItem,
});

export default basketReducer;
