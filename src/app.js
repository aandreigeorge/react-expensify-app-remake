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

store.dispatch(addExpense( {description: 'Water Bill', amount: 4500 } ));
store.dispatch(addExpense( {description: 'Gas Bill', createdAt:1000 } ));
store.dispatch(addExpense( {description: 'Rent', amount: 109400 } ));

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const jsx = ( 
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(jsx);