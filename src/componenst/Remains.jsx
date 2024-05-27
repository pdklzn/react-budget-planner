import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remains = () => {
    const { expenses, budget} = useContext(AppContext)
    const totalExpenses = expenses.reduce((acc, item) => acc + item.cost, 0)
    return (
        <div className='alert alert-primary'>
            <span>Остаток: {budget - totalExpenses}</span>
        </div>
    );
};

export default Remains;