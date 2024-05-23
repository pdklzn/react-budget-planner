import React from 'react';
import ExpenseItem from './ExpenseItem';



const ExpenseList = () => {

    const expenses = [
        { id: 1, name: 'Продукты', cost: 10 },
        { id: 2, name: 'Бензин', cost: 20 },
        { id: 3, name: 'Одежда', cost: 15 },
        { id: 4, name: 'Плата за квартиру', cost: 30 },
    ]



    return (
        <ul className='list-group'>
            {expenses.map((expense) =>
                <ExpenseItem
                    key={expense.id}
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}/>
            )}
        </ul>
    );
};

export default ExpenseList; 