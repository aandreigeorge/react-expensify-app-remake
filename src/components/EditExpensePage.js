import React from 'react';
import ExpenseForm from './ExpenseForm';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';


const EditExpensePage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const expenses = useSelector(state => state.expenses);
    const dispatch = useDispatch();
    const expense = expenses.find((expense) => expense.id === id);
   
    return (
        <div>
            <ExpenseForm 
                expense={expense}
                onSubmit={(expense) => {
                    dispatch(editExpense(id, expense));
                    navigate('/');
                }}
            />
            <button
                onClick={(expense) => {
                    dispatch(removeExpense({id}));
                    navigate('/');
                }}
            >Remove Expense</button>
        </div>
    );
}

export default EditExpensePage;