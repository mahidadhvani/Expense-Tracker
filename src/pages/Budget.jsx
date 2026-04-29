import { useExpenses } from "../context/ExpenseContext";

export default function Budget() {
  const { expenses } = useExpenses();

  const totalExpense = expenses.reduce(
    (a, b) => a + Number(b.amount || 0),
    0
  );

  const budgetLimit = 20000;
  const remaining = budgetLimit - totalExpense;

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-4">
      <h2 className="text-xl font-semibold">Budget</h2>

      <div className="bg-white p-5 rounded-2xl shadow">
        <p>Total Budget</p>
        <h2 className="text-2xl font-bold">₹{budgetLimit}</h2>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow">
        <p>Spent</p>
        <h2 className="text-xl text-red-500">₹{totalExpense}</h2>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow">
        <p>Remaining</p>
        <h2 className="text-xl text-green-500">₹{remaining}</h2>
      </div>
    </div>
  );
}