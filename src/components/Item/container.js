import { connect } from 'react-redux';
import { DELETE_ITEM } from '../../constants/action-types';
import Item from './component';

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch({ type: DELETE_ITEM, payload: item }),
});

export default connect(null, mapDispatchToProps)(Item);
