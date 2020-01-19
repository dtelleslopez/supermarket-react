import { connect } from 'react-redux';
import {
  getItems, getSubTotal, getTotalSavings, getAppliedSavings,
} from '../../selectors';
import { updateTotalSavings } from '../../actions';
import BasketList from './component';

const mapStateToProps = (state) => ({
  items: getItems(state),
  subTotal: getSubTotal(state),
  appliedSavings: getAppliedSavings(state),
  totalSavings: getTotalSavings(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateTotalSavings: (items) => dispatch(updateTotalSavings(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketList);
