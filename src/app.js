import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';


const store = configureStore();

const jsx = ( 
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);

store.dispatch(startSetExpenses());
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(jsx);