import React from 'react';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashBoardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import { unstable_HistoryRouter as HistoryRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history'


export const history = createBrowserHistory();

const AppRouter = () => (
    <HistoryRouter history={history}>
        <Header/>
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/dashboard' element={<ExpenseDashBoardPage/>} />
            <Route path='/create' element={<AddExpensePage/>} />
            <Route path='edit/:id' element={<EditExpensePage/> } />
            <Route path='/help' element={<HelpPage/>} />
            <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    </HistoryRouter>
);

export default AppRouter;


