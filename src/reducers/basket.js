import createReducer from '../helpers/createReducer';
import addItemInArray from '../helpers/addItemInArray';
import deleteItemInArray from '../helpers/deleteItemInArray';

const initialState = [];

function addItem(basketState, action) {
  return addItemInArray(basketState, action.payload);
}

function deleteItem(basketState, action) {
  return deleteItemInArray(basketState, action.payload);
}

const basketReducer = createReducer(initialState, {
  ADD_ITEM: addItem,
  DELETE_ITEM: deleteItem,
});

export default basketReducer;
