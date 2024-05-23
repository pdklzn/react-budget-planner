import React from 'react';

const ExpenseForm = () => {
    return (
        <form>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor="name">Имя</label>
                    <input 
                    type="text" 
                    className='form-control' 
                    required='required' 
                    id='name'/>
                </div>
                <div className='col-sm'>
                    <label htmlFor="cost">Стоимость</label>
                    <input 
                    required='required' 
                    type='text' 
                    className='form-control' 
                    id='cost'/>
                </div>
                <div className='cl-sm mt-3 d-grid mx-auto'>
                    <button type='submit' className='btn btn-primary'>Сохранить</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;