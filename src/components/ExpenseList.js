import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';
import { connect } from 'react-redux';


const ExpenseList = (props) => (
    <div>
      {
        props.expenses.length === 0 ? (
          <p>No expenses</p>
        ) : (
            props.expenses.map((expense) => {
              return <ExpenseListItem key={expense.id} {...expense} />;
              })
            )
      }
    </div>
);

const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);

