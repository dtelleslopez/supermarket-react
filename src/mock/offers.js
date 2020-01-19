import mockProducts from './products';
import offerTypes from '../constants/offerTypes';

const offers = [{
  name: 'Beans 3 for 2',
  product: mockProducts[0],
  type: offerTypes.THREE_FOR_TWO,
}, {
  name: 'Coke 2 for £1',
  product: mockProducts[1],
  type: offerTypes.TWO_FOR_AMOUNT,
}];

export default offers;
