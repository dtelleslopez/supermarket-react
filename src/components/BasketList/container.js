import { connect } from 'react-redux';
import BasketList from './component';
import { getBasket } from '../../selectors';

const mapStateToProps = (state) => ({
  basket: getBasket(state),
});

export default connect(mapStateToProps)(BasketList);
