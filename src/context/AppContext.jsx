import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const initialState = {
    budget: 1000,
    expenses: [
        { id: 1, name: 'Еда', cost: 10 },
        { id: 2, name: 'Бензин', cost: 20 },
    ]
}

const AppContext = createContext()

export const AppProvider = (props) => {
    const [state, dispach] = useReducer(AppReducer, initialState)

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispach,
        }}>{props.children}</AppContext.Provider>
    )
}