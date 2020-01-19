import isValidProduct from './isValidProduct';
import offerTypes from '../constants/offerTypes';

const isValidOffer = (offer) => offer !== undefined
  && offer !== null
  && !Array.isArray(offer)
  && typeof offer === 'object'
  && Object.keys(offer).length > 0
  && Object.keys(offer).includes('name')
  && Object.keys(offer).includes('product')
  && Object.keys(offer).includes('type')
  && typeof offer.name === 'string'
  && typeof offer.product === 'object'
  && isValidProduct({ ...offer.product, quantity: 0 })
  && typeof offer.type === 'string'
  && [offerTypes.THREE_FOR_TWO, offerTypes.TWO_FOR_AMOUNT].includes(offer.type.toUpperCase());

export default isValidOffer;
