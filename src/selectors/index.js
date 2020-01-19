export const getProducts = (state) => state.products;
export const getBasket = (state) => state.basket;
export const getSavings = (state) => state.savings;
export const getItems = (state) => getBasket(state).items;
export const getSubTotal = (state) => getBasket(state).subTotal;
export const getAppliedSavings = (state) => getSavings(state).applied;
export const getTotalSavings = (state) => getSavings(state).totalSavings;
