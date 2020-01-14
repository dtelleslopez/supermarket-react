import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import store from './store';
import { addProduct } from './actions/index';

window.store = store;
window.addProduct = addProduct;

ReactDOM.render(<App />, document.getElementById('root'));
