import { connect } from 'react-redux';
import { deleteItem } from '../../actions';
import ProductItem from './component';

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductItem);
