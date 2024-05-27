import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(item => item.id !== action.payload)
            }
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload
            }
        default:
            return state
    }
}

const initialState = {
    budget: 100,
    expenses: [
        { id: 1, name: 'Еда', cost: 10 },
        { id: 2, name: 'Бензин', cost: 20 },
    ]
}

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>{props.children}</AppContext.Provider>
    )
}