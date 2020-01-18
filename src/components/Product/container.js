import { connect } from 'react-redux';
import { addItem } from '../../actions';
import Product from './component';

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Product);
