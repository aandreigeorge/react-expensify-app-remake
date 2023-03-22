import React from 'react';
import ExpenseForm from './ExpenseForm';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';


const EditExpensePage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const expenses = useSelector(state => state.expenses);
    const dispatch = useDispatch();
    const expense = expenses.find((expense) => expense.id === id);
   
    return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                    <h1 className='page-header__title'>Edit Expense</h1>
                </div>
            </div>
            <div className='content-container'>
                <ExpenseForm 
                    expense={expense}
                    onSubmit={(expense) => {
                        dispatch(startEditExpense(id, expense));
                        navigate('/dashboard');
                    }}
                />
                <button
                    className='button button--secondary'
                    onClick={(expense) => {
                        dispatch(startRemoveExpense({id})); 
                        navigate('/dashboard');
                    }}
                >Remove Expense</button>
            </div>
        </div>
    );
}

export default EditExpensePage;