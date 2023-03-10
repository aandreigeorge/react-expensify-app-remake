import React from 'react';
import getVisibleExpenses from '../selectors/expenses';    
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import { connect } from 'react-redux';


const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses) 
    }
};

export default connect(mapStateToProps)(ExpensesSummary);

