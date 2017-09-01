import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/store.js';
import {persistStore, autoRehydrate} from 'redux-persist';
import App from './App';
import './index.css';

const store = configureStore()
persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
