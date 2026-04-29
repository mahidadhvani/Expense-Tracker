// import { createContext, useContext, useState } from "react";

// const ExpenseContext = createContext();

// export const ExpenseProvider = ({ children }) => {
//   const [expenses, setExpenses] = useState([]);

//   const addExpense = (expense) => {
//     console.log("Adding:", expense); // 🔍 debug
//     setExpenses((prev) => [...prev, expense]);
//   };

//   const updateExpense = (updated) => {
//     setExpenses((prev) =>
//       prev.map((e) => (e.id === updated.id ? updated : e))
//     );
//   };

//   const deleteExpense = (id) => {
//     setExpenses((prev) => prev.filter((e) => e.id !== id));
//   };

//   return (
//     <ExpenseContext.Provider
//       value={{ expenses, addExpense, updateExpense, deleteExpense }}
//     >
//       {children}
//     </ExpenseContext.Provider>
//   );
// };

// export const useExpenses = () => useContext(ExpenseContext);



import { createContext, useContext, useState, useEffect } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  // 🔄 Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("expenses"));
    if (saved) setExpenses(saved);
  }, []);

  // 💾 Save to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // ➕ Add
  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  // ✏️ Update
  const updateExpense = (updated) => {
    setExpenses((prev) =>
      prev.map((e) => (e.id === updated.id ? updated : e))
    );
  };

  // ❌ Delete
  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, updateExpense, deleteExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);