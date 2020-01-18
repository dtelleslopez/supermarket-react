import actionTypes from '../constants/actionTypes';

// ITEMS
export function addItem(payload) {
  return { type: actionTypes.ADD_ITEM, payload };
}

export function deleteItem(payload) {
  return { type: actionTypes.DELETE_ITEM, payload };
}

// SAVINGS
export function updateTotalSavings(payload) {
  return { type: actionTypes.UPDATE_TOTAL_SAVINGS, payload };
}
