import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid'
const ExpenseForm = () => {
    const { dispatch } = useContext(AppContext)
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })

    }
    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor="name">Имя</label>
                    <input
                        type="text"
                        className='form-control'
                        required='required'
                        id='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='col-sm'>
                    <label htmlFor="cost">Стоимость</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={e => setCost(e.target.value)}
                    />
                </div>
                <div className='cl-sm mt-3 d-grid mx-auto'>
                    <button type='submit' className='btn btn-primary'>Сохранить</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;