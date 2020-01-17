export const getProducts = (state) => state.products;
export const getBasket = (state) => state.basket;
export const getBasketItems = (state) => getBasket(state).items;
export const getBasketSubTotal = (state) => getBasket(state).subTotal;
