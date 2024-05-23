import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from "./componenst/Budget";
import Remaining from "./componenst/Remaining";
import Remains from "./componenst/Remains";
import ExpenseList from "./componenst/ExpenseList";
import ExpenseForm from "./componenst/ExpenseForm";
import { AppProvider } from "./context/AppContext";

function App() {

  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Мой планировщик бюджета</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Remains />
          </div>
        </div>
        <h3 className="mt-3">Расходы</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Добавить расходы</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
