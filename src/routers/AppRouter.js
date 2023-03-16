import React from 'react';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashBoardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const AppRouter = () => (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/dashboard' element={<ExpenseDashBoardPage/>} />
            <Route path='/create' element={<AddExpensePage/>} />
            <Route path='edit/:id' element={<EditExpensePage/> } />
            <Route path='/help' element={<HelpPage/>} />
            <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;


