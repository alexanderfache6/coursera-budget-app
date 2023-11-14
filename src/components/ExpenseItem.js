import React, { useContext } from 'react';
import { TiTrash, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'REDUCE_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><TiPlus size='1.5em' color='green' onClick={event=> increaseAllocation(props.name)}></TiPlus></td>
            <td><TiMinus size='1.5em' color='red' onClick={event=> decreaseAllocation(props.name)}></TiMinus></td>
            <td><TiTrash size='1.5em' onClick={handleDeleteExpense}></TiTrash></td>
        </tr>
    );
};

export default ExpenseItem;