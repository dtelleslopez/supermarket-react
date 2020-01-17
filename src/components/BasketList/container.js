import { connect } from 'react-redux';
import { getBasketItems, getBasketSubTotal } from '../../selectors';
import BasketList from './component';

const mapStateToProps = (state) => ({
  items: getBasketItems(state),
  subTotal: getBasketSubTotal(state),
});

export default connect(mapStateToProps)(BasketList);
