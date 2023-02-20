import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

const jsx = ( 
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(jsx);