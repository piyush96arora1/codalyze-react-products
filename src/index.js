import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductsProvider from './Components/ProductsProvider'
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { rootReducer } from './Store/reducer'
import EditProduct from './Components/EditProduct'

const store = createStore(rootReducer);
const Routing = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route exact path="/" component={ProductsProvider} />
            <Route path="/edit-product" component={EditProduct} />
        </BrowserRouter>
    </Provider>)
ReactDOM.render(<Routing store={store} />, document.getElementById('root'));

