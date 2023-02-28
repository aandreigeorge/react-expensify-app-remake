import { db } from '../firebase/firebase';
import { getDatabase, ref, set, update, remove, off, onValue, push, onChildRemoved, onChildChanged, onChildAdded} from "firebase/database";


export const startSetExpenses = () => {

    return (dispatch) => {
        return onValue(ref(db, 'expenses'), (snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            });
            dispatch(setExpenses(expenses));
        });
    };
};
const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});


export const startAddExpense = (expenseData = {}) => {

    return (dispatch) => {

        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0 
        } = expenseData;

        const expense = {description, note, amount, createdAt};
        push(ref(db, 'expenses'), expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});


export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});

export const removeExpense = ( {id} = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

