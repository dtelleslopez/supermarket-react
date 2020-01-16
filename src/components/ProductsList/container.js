import { connect } from 'react-redux';
import ProductsList from './component';
import { getProducts } from '../../selectors';

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

export default connect(mapStateToProps)(ProductsList);
