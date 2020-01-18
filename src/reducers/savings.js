import createReducer from '../helpers/createReducer';
import actionTypes from '../constants/actionTypes';
import getAppliedSavings from '../functions/getAppliedSavings';
import mockOffers from '../mock/offers';

const initialState = {
  offers: [...mockOffers],
  applied: [],
  totalSavings: 0,
};

function updateTotalSavings(savingsState, action) {
  const applied = getAppliedSavings(action.payload, savingsState.offers);

  return {
    ...savingsState,
    applied,
  };
}


const savingsReducer = createReducer(initialState, {
  [actionTypes.UPDATE_TOTAL_SAVINGS]: updateTotalSavings,
});

export default savingsReducer;
