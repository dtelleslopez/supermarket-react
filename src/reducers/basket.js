import createReducer from '../helpers/createReducer';
import addItemInArray from '../functions/addItemInArray';
import deleteItemInArray from '../functions/deleteItemInArray';
import getSubTotal from '../functions/getSubTotal';

const initialState = {
  items: [],
  subTotal: 0,
};

function addItem(basketState, action) {
  const items = addItemInArray(basketState.items, action.payload);

  return {
    ...basketState,
    subTotal: getSubTotal(items),
    items,
  };
}

function deleteItem(basketState, action) {
  const items = deleteItemInArray(basketState.items, action.payload);

  return {
    ...basketState,
    subTotal: getSubTotal(items),
    items,
  };
}

const basketReducer = createReducer(initialState, {
  ADD_ITEM: addItem,
  DELETE_ITEM: deleteItem,
});

export default basketReducer;
