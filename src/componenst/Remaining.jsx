import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget} = useContext(AppContext)
    const totalExpenses = expenses.reduce((acc, item) => acc + item.cost, 0)
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'
    return (
        <div className={`alert ${alertType}`}>
            <span>Потрачено: {totalExpenses}</span>
        </div>
    );
};

export default Remaining;