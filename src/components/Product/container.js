import { connect } from 'react-redux';
import { ADD_ITEM } from '../../constants/action-types';
import Product from './component';

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch({ type: ADD_ITEM, payload: item }),
});

export default connect(null, mapDispatchToProps)(Product);
