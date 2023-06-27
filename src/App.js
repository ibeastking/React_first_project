import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Pani Puri",
      date: new Date(2020, 7, 14),
      amount: 30,
    },
    {
      id: "e2",
      title: "Dosa",
      date: new Date(2021, 2, 12),
      amount: 40,
    },
    {
      id: "e3",
      title: "Samosa",
      date: new Date(2021, 2, 28),
      amount: 15,
    },
    {
      id: "e4",
      title: "Vada Pav",
      date: new Date(2021, 5, 12),
      amount: 10,
    },
  ];

  const addExpenseHandler = (expenseData) => {
    console.log("In App.js");
    console.log(expenseData);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expense={expense}></Expenses>
    </div>
  );
}

export default App;
