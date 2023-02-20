import React from "react";
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

//Switched to a class based component because we need to track a piece of state 
class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null 
    };

    onDatesChange = ( {startDate, endDate} ) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    
    render () {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filters.text}
                    onChange = {(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange = {(e) => {
                        if(e.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Anmount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId={'start'}
                    endDate={this.props.filters.endDate}
                    endDateId={'end'}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={ 1 }
                    isOutsideRange={ () => false }
                    showClearDates={ true }
                />  
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters)