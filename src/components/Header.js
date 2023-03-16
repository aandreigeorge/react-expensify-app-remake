import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


const Header = (props) => (
        <header>
            <h1>Expensify</h1>
            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'is-active' : undefined}>Dashboard </NavLink>
            <NavLink to='/create' className={({ isActive }) => isActive ? 'is-active' : undefined}>Create Expense </NavLink>
            <button onClick={props.dispatch(startLogout)}>Logout</button>
        </header>
);

export default connect()(Header);


