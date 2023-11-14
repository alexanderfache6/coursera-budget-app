import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, budgetUpperLimit, currency, dispatch, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => total += item.cost, 0);

    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {

        if (newBudget > budgetUpperLimit) {
            alert("The value cannot exceed " + currency + budgetUpperLimit);
            setNewBudget(budgetUpperLimit);
            return;
        } else if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget lower than the spending " + currency + totalExpenses);
            setNewBudget(totalExpenses);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });

    }, [newBudget]);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>

            <input
                required='required'
                type='number'
                id='newBudget'
                value={newBudget}
                style={{ marginLeft: '0rem' , size: 10}}
                step={10}
                onChange={(event) => setNewBudget(event.target.value)}>
            </input>

        </div>
    );
};

export default Budget;