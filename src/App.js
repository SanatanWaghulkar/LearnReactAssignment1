import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 230, date: new Date(2021, 2, 23) },
    { title: "Health Insurance", amount: 112, date: new Date(2021, 0, 23) },
    { title: "Grocery", amount: 930, date: new Date(2021, 10, 3) },
    { title: "Electricity Bill", amount: 89, date: new Date(2021, 2, 23) },
  ];

  return (
    <div>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
