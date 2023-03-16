import 'normalize.css/normalize.css';
import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { googleAuth } from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';


const root = ReactDOM.createRoot(document.getElementById('app'));
const store = configureStore();
let hasRendered = false;

const jsx = ( 
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);
const renderApp = () => {
    if(!hasRendered) {
        root.render(jsx);
        hasRendered = true;
    }
};

googleAuth.onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(startSetExpenses());
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    } else {
        renderApp();
        history.push('/');  
    }
});