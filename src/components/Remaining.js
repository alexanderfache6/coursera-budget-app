import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { budget, currency, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((accumulator, currentItem) => accumulator + currentItem.cost, 0)
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;