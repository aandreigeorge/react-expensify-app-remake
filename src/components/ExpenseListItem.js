import React from "react";
import { Link } from "react-router-dom";


const ExpenseListItem = ( {description, amount, createdAt, id} ) => (
    <div>
        <Link to = {`/edit/${id}`}> 
            <h3>{description}</h3>
        </Link>
        <p>With the amount of {amount} and created at {createdAt}</p>
        
    </div>
);

export default ExpenseListItem;

