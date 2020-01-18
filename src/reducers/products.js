import createReducer from '../helpers/createReducer';
import mockProducts from '../mock/products';

const initialState = [...mockProducts];

const productsReducer = createReducer(initialState);

export default productsReducer;
