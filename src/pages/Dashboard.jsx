// import Charts from "../components/dashboard/Charts";
// import Card from "../components/ui/Card";
// import { useExpenses } from "../context/ExpenseContext";

// import { ArrowUp, ArrowDown, Wallet } from "lucide-react";

// export default function Dashboard() {
//   const { expenses } = useExpenses();

//   // 🔍 DEBUG (check in console)
//   console.log("Expenses:", expenses);

//   // 🔥 Safe Calculations
//   const totalExpense = expenses.reduce(
//     (a, b) => a + Number(b.amount || 0),
//     0
//   );

//   const totalIncome = 25000;
//   const savings = totalIncome - totalExpense;

//   return (
//     <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

//       {/* 🔵 Balance Card */}
//       <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg">
//         <h3 className="text-sm opacity-80">Total Balance</h3>
//         <p className="text-3xl font-bold">₹{savings}</p>
//       </div>

//       {/* 📊 Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

//         <Card className="flex items-center justify-between">
//           <div>
//             <p className="text-gray-500 text-sm">Total Income</p>
//             <h2 className="text-xl font-bold text-green-500">
//               ₹{totalIncome}
//             </h2>
//           </div>
//           <ArrowUp className="text-green-500" />
//         </Card>

//         <Card className="flex items-center justify-between">
//           <div>
//             <p className="text-gray-500 text-sm">Total Expense</p>
//             <h2 className="text-xl font-bold text-red-500">
//               ₹{totalExpense}
//             </h2>
//           </div>
//           <ArrowDown className="text-red-500" />
//         </Card>

//         <Card className="flex items-center justify-between">
//           <div>
//             <p className="text-gray-500 text-sm">Savings</p>
//             <h2 className="text-xl font-bold text-blue-500">
//               ₹{savings}
//             </h2>
//           </div>
//           <Wallet className="text-blue-500" />
//         </Card>

//       </div>

//       {/* 📈 Charts */}
//       <Charts expenses={expenses} />

//       {/* 🧾 Transactions */}
//       <Card>
//         <h3 className="mb-4 font-semibold text-lg">Recent Transactions</h3>

//         {expenses.length === 0 ? (
//           <p className="text-gray-400 text-sm">
//             No transactions yet — add one to see charts
//           </p>
//         ) : (
//           <div className="space-y-2">
//             {expenses.map((e) => (
//               <div
//                 key={e.id}
//                 className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-100 transition"
//               >
//                 <div>
//                   <p className="font-medium">{e.title}</p>
//                   <p className="text-xs text-gray-500">
//                     {e.category || "Other"} •{" "}
//                     {e.date
//                       ? new Date(e.date).toLocaleDateString()
//                       : "No date"}
//                   </p>
//                 </div>

//                 <span className="font-semibold text-sm">
//                   ₹{e.amount}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </Card>

//     </div>
//   );
// }


// import Card from "../components/ui/Card";
// import { useExpenses } from "../context/ExpenseContext";
// import { ArrowUp, ArrowDown, Wallet, Plus } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const { expenses } = useExpenses();
//   const navigate = useNavigate();

//   // 🔥 Calculations
//   const totalExpense = expenses.reduce(
//     (a, b) => a + Number(b.amount || 0),
//     0
//   );

//   const totalIncome = 25000;
//   const savings = totalIncome - totalExpense;

//   // 📊 Basic Insight
//   const isOverspending = totalExpense > totalIncome * 0.7;

//   // 🧾 Recent Transactions (last 5 only)
//   const recentExpenses = [...expenses].slice(-5).reverse();

//   return (
//     <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

//       {/* 🔵 Balance Card */}
//       <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg">
//         <h3 className="text-sm opacity-80">Total Balance</h3>
//         <p className="text-3xl font-bold">₹{savings}</p>
//       </div>

//       {/* 📊 Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

//         <Card className="flex items-center justify-between">
//           <div>
//             <p className="text-gray-500 text-sm">Total Income</p>
//             <h2 className="text-xl font-bold text-green-500">
//               ₹{totalIncome}
//             </h2>
//           </div>
//           <ArrowUp className="text-green-500" />
//         </Card>

//         <Card className="flex items-center justify-between">
//           <div>
//             <p className="text-gray-500 text-sm">Total Expense</p>
//             <h2 className="text-xl font-bold text-red-500">
//               ₹{totalExpense}
//             </h2>
//           </div>
//           <ArrowDown className="text-red-500" />
//         </Card>

//         <Card className="flex items-center justify-between">
//           <div>
//             <p className="text-gray-500 text-sm">Savings</p>
//             <h2 className="text-xl font-bold text-blue-500">
//               ₹{savings}
//             </h2>
//           </div>
//           <Wallet className="text-blue-500" />
//         </Card>

//       </div>

//       {/* ⚡ Quick Actions */}
//       <div className="flex gap-4">
//         <button
//           onClick={() => navigate("/transactions")}
//           className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow"
//         >
//           <Plus size={16} />
//           Add Expense
//         </button>

//         <button
//           onClick={() => navigate("/analytics")}
//           className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl"
//         >
//           View Analytics
//         </button>
//       </div>

//       {/* 💡 Insight Card */}
//       <div
//         className={`p-4 rounded-xl border ${
//           isOverspending
//             ? "bg-red-50 border-red-200"
//             : "bg-green-50 border-green-200"
//         }`}
//       >
//         <p className="text-sm">
//           {isOverspending
//             ? "⚠️ You are spending a high portion of your income. Consider reducing expenses."
//             : "✅ Your spending is under control. Good job managing your finances!"}
//         </p>
//       </div>

//       {/* 🧾 Recent Transactions */}
//       <Card>
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-semibold text-lg">Recent Transactions</h3>

//           <button
//             onClick={() => navigate("/transactions")}
//             className="text-sm text-indigo-600 hover:underline"
//           >
//             View All
//           </button>
//         </div>

//         {expenses.length === 0 ? (
//           <p className="text-gray-400 text-sm">
//             No transactions yet — add one to get started
//           </p>
//         ) : (
//           <div className="space-y-2">
//             {recentExpenses.map((e) => (
//               <div
//                 key={e.id}
//                 className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition"
//               >
//                 <div>
//                   <p className="font-medium">{e.title}</p>
//                   <p className="text-xs text-gray-500">
//                     {e.category || "Other"} •{" "}
//                     {e.date
//                       ? new Date(e.date).toLocaleDateString()
//                       : "No date"}
//                   </p>
//                 </div>

//                 <span className="font-semibold text-sm text-red-500">
//                   - ₹{e.amount}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </Card>

//     </div>
//   );
// }




// import Card from "../components/ui/Card";
// import { useExpenses } from "../context/ExpenseContext";
// import { ArrowUp, ArrowDown, Wallet, Plus } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const { expenses } = useExpenses();
//   const navigate = useNavigate();

//   // 🔥 Calculations
//   const totalExpense = expenses.reduce(
//     (a, b) => a + Number(b.amount || 0),
//     0
//   );

//   const totalIncome = 25000;
//   const savings = totalIncome - totalExpense;

//   // 📊 Insight
//   const isOverspending = totalExpense > totalIncome * 0.7;

//   // 🧾 Recent Transactions
//   const recentExpenses = [...expenses].slice(-5).reverse();

//   return (
//     <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

//       {/* 🔵 Balance Card */}
//       <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg">
//         <h3 className="text-sm opacity-80">Total Balance</h3>
//         <p className="text-3xl font-bold">₹{savings}</p>
//       </div>

//       {/* 🔥 UPDATED PREMIUM SUMMARY CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

//         {/* 💰 Income */}
//         <Card className="flex items-center justify-between bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition duration-200 cursor-pointer">
//           <div>
//             <p className="text-gray-600 text-sm">Total Income</p>
//             <h2 className="text-xl font-bold text-green-600">
//               ₹{totalIncome}
//             </h2>
//           </div>
//           <ArrowUp className="text-green-600" />
//         </Card>

//         {/* 💸 Expense */}
//         <Card className="flex items-center justify-between bg-gradient-to-br from-red-50 to-red-100 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition duration-200 cursor-pointer">
//           <div>
//             <p className="text-gray-600 text-sm">Total Expense</p>
//             <h2 className="text-xl font-bold text-red-600">
//               ₹{totalExpense}
//             </h2>
//           </div>
//           <ArrowDown className="text-red-600" />
//         </Card>

//         {/* 🏦 Savings */}
//         <Card className="flex items-center justify-between bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition duration-200 cursor-pointer">
//           <div>
//             <p className="text-gray-600 text-sm">Savings</p>
//             <h2 className="text-xl font-bold text-blue-600">
//               ₹{savings}
//             </h2>
//           </div>
//           <Wallet className="text-blue-600" />
//         </Card>

//       </div>

//       {/* ⚡ Quick Actions */}
//       <div className="flex gap-4">
//         <button
//           onClick={() => navigate("/transactions")}
//           className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow"
//         >
//           <Plus size={16} />
//           Add Expense
//         </button>

//         <button
//           onClick={() => navigate("/analytics")}
//           className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl"
//         >
//           View Analytics
//         </button>
//       </div>

//       {/* 💡 Insight Card */}
//       <div
//         className={`p-4 rounded-xl border ${
//           isOverspending
//             ? "bg-red-50 border-red-200"
//             : "bg-green-50 border-green-200"
//         }`}
//       >
//         <p className="text-sm">
//           {isOverspending
//             ? "⚠️ You are spending a high portion of your income. Consider reducing expenses."
//             : "✅ Your spending is under control. Good job managing your finances!"}
//         </p>
//       </div>

//       {/* 🧾 Recent Transactions */}
//       <Card>
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-semibold text-lg">Recent Transactions</h3>

//           <button
//             onClick={() => navigate("/transactions")}
//             className="text-sm text-indigo-600 hover:underline"
//           >
//             View All
//           </button>
//         </div>

//         {expenses.length === 0 ? (
//           <p className="text-gray-400 text-sm">
//             No transactions yet — add one to get started
//           </p>
//         ) : (
//           <div className="space-y-2">
//             {recentExpenses.map((e) => (
//               <div
//                 key={e.id}
//                 className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition"
//               >
//                 <div>
//                   <p className="font-medium">{e.title}</p>
//                   <p className="text-xs text-gray-500">
//                     {e.category || "Other"} •{" "}
//                     {e.date
//                       ? new Date(e.date).toLocaleDateString()
//                       : "No date"}
//                   </p>
//                 </div>

//                 <span className="font-semibold text-sm text-red-500">
//                   - ₹{e.amount}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </Card>

//     </div>
//   );
// }


// import Card from "../components/ui/Card";
// import { useExpenses } from "../context/ExpenseContext";
// import { ArrowUp, ArrowDown, Wallet, Plus } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const { expenses } = useExpenses();
//   const navigate = useNavigate();

//   // 🔥 Calculations
//   const totalExpense = expenses.reduce(
//     (a, b) => a + Number(b.amount || 0),
//     0
//   );

//   const totalIncome = 25000;
//   const savings = totalIncome - totalExpense;

//   // 💡 Insight
//   const isOverspending = totalExpense > totalIncome * 0.7;

//   // 🧾 Recent Transactions
//   const recentExpenses = [...expenses].slice(-5).reverse();

//   return (
//     <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

//       {/* 🔵 Balance Card */}
//       <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg">
//         <h3 className="text-sm opacity-80">Available Balance</h3>
//         <p className="text-3xl font-bold">₹{savings}</p>
//       </div>

//       {/* 📊 Premium Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

//         {/* 💰 Income */}
//         <Card className="p-1 rounded-2xl bg-gradient-to-br from-green-200/40 to-green-100/20 hover:shadow-xl transition hover:scale-[1.02]">

//           <div className="flex items-center justify-between bg-white rounded-xl p-4 transition cursor-pointer">
//             <div>
//               <p className="text-gray-600 text-sm">Total Income</p>
//               <h2 className="text-xl font-bold text-green-600">
//                 ₹{totalIncome}
//               </h2>
//             </div>
//             <ArrowUp className="text-green-600" />
//           </div>

//         </Card>

//         {/* 💸 Expense */}
//         <Card className="p-1 rounded-2xl bg-gradient-to-br from-red-200/40 to-red-100/20 hover:shadow-xl transition hover:scale-[1.02]">

//           <div className="flex items-center justify-between bg-white rounded-xl p-4 transition cursor-pointer">
//             <div>
//               <p className="text-gray-600 text-sm">Total Expense</p>
//               <h2 className="text-xl font-bold text-red-600">
//                 ₹{totalExpense}
//               </h2>
//             </div>
//             <ArrowDown className="text-red-600" />
//           </div>

//         </Card>

//         {/* 🏦 Savings */}
//         <Card className="p-1 rounded-2xl bg-gradient-to-br from-blue-200/40 to-blue-100/20 hover:shadow-xl transition hover:scale-[1.02]">

//           <div className="flex items-center justify-between bg-white rounded-xl p-4 transition cursor-pointer">
//             <div>
//               <p className="text-gray-600 text-sm">Savings</p>
//               <h2 className="text-xl font-bold text-blue-600">
//                 ₹{savings}
//               </h2>
//             </div>
//             <Wallet className="text-blue-600" />
//           </div>

//         </Card>

//       </div>

//       {/* ⚡ Quick Actions */}
//       <div className="flex gap-4">
//         <button
//           onClick={() => navigate("/transactions")}
//           className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow"
//         >
//           <Plus size={16} />
//           Add Expense
//         </button>

//         <button
//           onClick={() => navigate("/analytics")}
//           className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl"
//         >
//           View Analytics
//         </button>
//       </div>

//       {/* 💡 Insight Card */}
//       <div
//         className={`p-4 rounded-xl border ${
//           isOverspending
//             ? "bg-red-50 border-red-200"
//             : "bg-green-50 border-green-200"
//         }`}
//       >
//         <p className="text-sm">
//           {isOverspending
//             ? "⚠️ You are spending a high portion of your income. Consider reducing expenses."
//             : "✅ Your spending is under control. Good job managing your finances!"}
//         </p>
//       </div>

//       {/* 🧾 Recent Transactions */}
//       <Card>
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-semibold text-lg">Recent Transactions</h3>

//           <button
//             onClick={() => navigate("/transactions")}
//             className="text-sm text-indigo-600 hover:underline"
//           >
//             View All
//           </button>
//         </div>

//         {expenses.length === 0 ? (
//           <p className="text-gray-400 text-sm">
//             No transactions yet — add one to get started
//           </p>
//         ) : (
//           <div className="space-y-2">
//             {recentExpenses.map((e) => (
//               <div
//                 key={e.id}
//                 className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition"
//               >
//                 <div>
//                   <p className="font-medium">{e.title}</p>
//                   <p className="text-xs text-gray-500">
//                     {e.category || "Other"} •{" "}
//                     {e.date
//                       ? new Date(e.date).toLocaleDateString()
//                       : "No date"}
//                   </p>
//                 </div>

//                 <span className="font-semibold text-sm text-red-500">
//                   - ₹{e.amount}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </Card>

//     </div>
//   );
// }




// import Card from "../components/ui/Card";
// import { useExpenses } from "../context/ExpenseContext";
// import { ArrowUp, ArrowDown, Wallet, Plus } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const { expenses } = useExpenses();
//   const navigate = useNavigate();

//   // 🔥 Calculations
//   const totalExpense = expenses.reduce(
//     (a, b) => a + Number(b.amount || 0),
//     0
//   );

//   const totalIncome = 25000;
//   const savings = totalIncome - totalExpense;

//   // 💡 Insight
//   const isOverspending = totalExpense > totalIncome * 0.7;

//   // 🧾 Recent Transactions
//   const recentExpenses = [...expenses].slice(-5).reverse();

//   return (
//     <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

//       {/* 🔵 Balance Card */}
//       <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg">
//         <h3 className="text-sm opacity-80">Available Balance</h3>
//         <p className="text-3xl font-bold">₹{savings}</p>
//       </div>

//       {/* 📊 UPDATED SUMMARY CARDS (FIXED) */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

//         {/* 💰 Income */}
//         <Card className="p-5 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-700 text-sm">Total Income</p>
//               <h2 className="text-xl font-bold text-green-700">
//                 ₹{totalIncome}
//               </h2>
//             </div>
//             <ArrowUp className="text-green-700" />
//           </div>
//         </Card>

//         {/* 💸 Expense */}
//         <Card className="p-5 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-700 text-sm">Total Expense</p>
//               <h2 className="text-xl font-bold text-red-700">
//                 ₹{totalExpense}
//               </h2>
//             </div>
//             <ArrowDown className="text-red-700" />
//           </div>
//         </Card>

//         {/* 🏦 Savings */}
//         <Card className="p-5 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-700 text-sm">Savings</p>
//               <h2 className="text-xl font-bold text-blue-700">
//                 ₹{savings}
//               </h2>
//             </div>
//             <Wallet className="text-blue-700" />
//           </div>
//         </Card>

//       </div>

//       {/* ⚡ Quick Actions */}
//       <div className="flex gap-4">
//         <button
//           onClick={() => navigate("/transactions")}
//           className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow"
//         >
//           <Plus size={16} />
//           Add Expense
//         </button>

//         <button
//           onClick={() => navigate("/analytics")}
//           className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl"
//         >
//           View Analytics
//         </button>
//       </div>

//       {/* 💡 Insight Card */}
//       <div
//         className={`p-4 rounded-xl border ${
//           isOverspending
//             ? "bg-red-50 border-red-200"
//             : "bg-green-50 border-green-200"
//         }`}
//       >
//         <p className="text-sm">
//           {isOverspending
//             ? "⚠️ You are spending a high portion of your income. Consider reducing expenses."
//             : "✅ Your spending is under control. Good job managing your finances!"}
//         </p>
//       </div>

//       {/* 🧾 Recent Transactions */}
//       <Card>
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-semibold text-lg">Recent Transactions</h3>

//           <button
//             onClick={() => navigate("/transactions")}
//             className="text-sm text-indigo-600 hover:underline"
//           >
//             View All
//           </button>
//         </div>

//         {expenses.length === 0 ? (
//           <p className="text-gray-400 text-sm">
//             No transactions yet — add one to get started
//           </p>
//         ) : (
//           <div className="space-y-2">
//             {recentExpenses.map((e) => (
//               <div
//                 key={e.id}
//                 className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition"
//               >
//                 <div>
//                   <p className="font-medium">{e.title}</p>
//                   <p className="text-xs text-gray-500">
//                     {e.category || "Other"} •{" "}
//                     {e.date
//                       ? new Date(e.date).toLocaleDateString()
//                       : "No date"}
//                   </p>
//                 </div>

//                 <span className="font-semibold text-sm text-red-500">
//                   - ₹{e.amount}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </Card>

//     </div>
//   );
// }




// import Card from "../components/ui/Card";
// import { useExpenses } from "../context/ExpenseContext";
// import { ArrowUp, ArrowDown, Wallet, Plus } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard({ setOpen, setEditData }) {
//   const { expenses } = useExpenses();
//   const navigate = useNavigate();

//   // 🔥 Calculations
//   const totalExpense = expenses.reduce(
//     (a, b) => a + Number(b.amount || 0),
//     0
//   );

//   const totalIncome = 25000;
//   const savings = totalIncome - totalExpense;

//   // 💡 Insight
//   const isOverspending = totalExpense > totalIncome * 0.7;

//   // 🧾 Recent Transactions
//   const recentExpenses = [...expenses].slice(-5).reverse();

//   return (
//     <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

//       {/* 🔵 Balance Card */}
//       <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg">
//         <h3 className="text-sm opacity-80">Available Balance</h3>
//         <p className="text-3xl font-bold">₹{savings}</p>
//       </div>

//       {/* 📊 Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

//         <Card className="p-5 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-700 text-sm">Total Income</p>
//               <h2 className="text-xl font-bold text-green-700">
//                 ₹{totalIncome}
//               </h2>
//             </div>
//             <ArrowUp className="text-green-700" />
//           </div>
//         </Card>

//         <Card className="p-5 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-700 text-sm">Total Expense</p>
//               <h2 className="text-xl font-bold text-red-700">
//                 ₹{totalExpense}
//               </h2>
//             </div>
//             <ArrowDown className="text-red-700" />
//           </div>
//         </Card>

//         <Card className="p-5 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-700 text-sm">Savings</p>
//               <h2 className="text-xl font-bold text-blue-700">
//                 ₹{savings}
//               </h2>
//             </div>
//             <Wallet className="text-blue-700" />
//           </div>
//         </Card>

//       </div>

//       {/* ⚡ Quick Actions */}
//       <div className="flex gap-4">

//         {/* ✅ FIXED BUTTON (MODAL OPEN) */}
//         <button
//           onClick={() => {
//             setEditData(null); // new entry
//             setOpen(true);     // open popup form
//           }}
//           className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow"
//         >
//           <Plus size={16} />
//           Add Expense
//         </button>

//         <button
//           onClick={() => navigate("/analytics")}
//           className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl"
//         >
//           View Analytics
//         </button>
//       </div>

//       {/* 💡 Insight */}
//       <div
//         className={`p-4 rounded-xl border ${
//           isOverspending
//             ? "bg-red-50 border-red-200"
//             : "bg-green-50 border-green-200"
//         }`}
//       >
//         <p className="text-sm">
//           {isOverspending
//             ? "⚠️ You are spending too much."
//             : "✅ Spending is under control."}
//         </p>
//       </div>

//       {/* 🧾 Recent Transactions */}
//       <Card>
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-semibold text-lg">Recent Transactions</h3>

//           <button
//             onClick={() => navigate("/transactions")}
//             className="text-sm text-indigo-600 hover:underline"
//           >
//             View All
//           </button>
//         </div>

//         {expenses.length === 0 ? (
//           <p className="text-gray-400 text-sm">
//             No transactions yet — add one to get started
//           </p>
//         ) : (
//           <div className="space-y-2">
//             {recentExpenses.map((e) => (
//               <div
//                 key={e.id}
//                 className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition"
//               >
//                 <div>
//                   <p className="font-medium">{e.title}</p>
//                   <p className="text-xs text-gray-500">
//                     {e.category || "Other"} •{" "}
//                     {e.date
//                       ? new Date(e.date).toLocaleDateString()
//                       : "No date"}
//                   </p>
//                 </div>

//                 <span className="font-semibold text-sm text-red-500">
//                   - ₹{e.amount}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </Card>

//     </div>
//   );
// }




// import Card from "../components/ui/Card";
// import { useExpenses } from "../context/ExpenseContext";
// import { ArrowUp, ArrowDown, Wallet } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const { expenses } = useExpenses();
//   const navigate = useNavigate();

//   // 🔥 Calculations
//   const totalExpense = expenses.reduce(
//     (a, b) => a + Number(b.amount || 0),
//     0
//   );

//   const totalIncome = 25000;
//   const savings = totalIncome - totalExpense;

//   // 💡 Insight
//   const isOverspending = totalExpense > totalIncome * 0.7;

//   // 🧾 Recent Transactions
//   const recentExpenses = [...expenses].slice(-5).reverse();

//   return (
//     <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

//       {/* 🔵 Balance Card */}
//       <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg">
//         <h3 className="text-sm opacity-80">Available Balance</h3>
//         <p className="text-3xl font-bold">₹{savings}</p>
//       </div>

//       {/* 📊 Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

//         {/* 💰 Income */}
//         <Card className="p-5 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-700 text-sm">Total Income</p>
//               <h2 className="text-xl font-bold text-green-700">
//                 ₹{totalIncome}
//               </h2>
//             </div>
//             <ArrowUp className="text-green-700" />
//           </div>
//         </Card>

//         {/* 💸 Expense */}
//         <Card className="p-5 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-700 text-sm">Total Expense</p>
//               <h2 className="text-xl font-bold text-red-700">
//                 ₹{totalExpense}
//               </h2>
//             </div>
//             <ArrowDown className="text-red-700" />
//           </div>
//         </Card>

//         {/* 🏦 Savings */}
//         <Card className="p-5 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-700 text-sm">Savings</p>
//               <h2 className="text-xl font-bold text-blue-700">
//                 ₹{savings}
//               </h2>
//             </div>
//             <Wallet className="text-blue-700" />
//           </div>
//         </Card>

//       </div>

//       {/* ⚡ Quick Actions (ONLY ONE BUTTON NOW) */}
//       <div className="flex gap-4">
//         <button
//           onClick={() => navigate("/analytics")}
//           className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl"
//         >
//           View Analytics
//         </button>
//       </div>

//       {/* 💡 Insight */}
//       <div
//         className={`p-4 rounded-xl border ${
//           isOverspending
//             ? "bg-red-50 border-red-200"
//             : "bg-green-50 border-green-200"
//         }`}
//       >
//         <p className="text-sm">
//           {isOverspending
//             ? "⚠️ You are spending too much."
//             : "✅ Spending is under control."}
//         </p>
//       </div>

//       {/* 🧾 Recent Transactions */}
//       <Card>
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="font-semibold text-lg">Recent Transactions</h3>

//           <button
//             onClick={() => navigate("/transactions")}
//             className="text-sm text-indigo-600 hover:underline"
//           >
//             View All
//           </button>
//         </div>

//         {expenses.length === 0 ? (
//           <p className="text-gray-400 text-sm">
//             No transactions yet — add one to get started
//           </p>
//         ) : (
//           <div className="space-y-2">
//             {recentExpenses.map((e) => (
//               <div
//                 key={e.id}
//                 className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition"
//               >
//                 <div>
//                   <p className="font-medium">{e.title}</p>
//                   <p className="text-xs text-gray-500">
//                     {e.category || "Other"} •{" "}
//                     {e.date
//                       ? new Date(e.date).toLocaleDateString()
//                       : "No date"}
//                   </p>
//                 </div>

//                 <span className="font-semibold text-sm text-red-500">
//                   - ₹{e.amount}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}
//       </Card>

//     </div>
//   );
// }

// Dashboard =

// 👉 Overview + Actions + Quick Info

// Analytics =

// 👉 Charts + Trends + Deep Insights


import Card from "../components/ui/Card";
import { useExpenses } from "../context/ExpenseContext";
import { ArrowUp, ArrowDown, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { expenses } = useExpenses();
  const navigate = useNavigate();

  // 🔥 Calculations
  const totalExpense = expenses.reduce(
    (a, b) => a + Number(b.amount || 0),
    0
  );

  const totalIncome = 25000;
  const savings = totalIncome - totalExpense;

  // 💡 Insight
  const isOverspending = totalExpense > totalIncome * 0.7;

  // 🧾 Recent Transactions
  const recentExpenses = [...expenses].slice(-5).reverse();

  return (
    <div className="p-4 md:p-6 space-y-5 md:space-y-6 bg-gray-50 min-h-screen">

      {/* 🔵 Balance Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-5 md:p-6 rounded-2xl shadow-lg">
        <h3 className="text-xs md:text-sm opacity-80">
          Available Balance
        </h3>
        <p className="text-2xl md:text-3xl font-bold">
          ₹{savings}
        </p>
      </div>

      {/* 📊 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">

        {/* 💰 Income */}
        <Card className="p-4 md:p-5 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 text-xs md:text-sm">
                Total Income
              </p>
              <h2 className="text-lg md:text-xl font-bold text-green-700">
                ₹{totalIncome}
              </h2>
            </div>
            <ArrowUp className="text-green-700" size={20} />
          </div>
        </Card>

        {/* 💸 Expense */}
        <Card className="p-4 md:p-5 rounded-2xl bg-gradient-to-br from-red-100 to-red-200 hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 text-xs md:text-sm">
                Total Expense
              </p>
              <h2 className="text-lg md:text-xl font-bold text-red-700">
                ₹{totalExpense}
              </h2>
            </div>
            <ArrowDown className="text-red-700" size={20} />
          </div>
        </Card>

        {/* 🏦 Savings */}
        <Card className="p-4 md:p-5 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 hover:shadow-xl hover:scale-[1.02] transition cursor-pointer">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 text-xs md:text-sm">
                Savings
              </p>
              <h2 className="text-lg md:text-xl font-bold text-blue-700">
                ₹{savings}
              </h2>
            </div>
            <Wallet className="text-blue-700" size={20} />
          </div>
        </Card>

      </div>

      {/* ⚡ Actions */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          onClick={() => navigate("/analytics")}
          className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl text-sm"
        >
          View Analytics
        </button>
      </div>

      {/* 💡 Insight */}
      <div
        className={`p-4 rounded-xl border text-sm ${
          isOverspending
            ? "bg-red-50 border-red-200"
            : "bg-green-50 border-green-200"
        }`}
      >
        {isOverspending
          ? "⚠️ You are spending too much."
          : "✅ Spending is under control."}
      </div>

      {/* 🧾 Transactions */}
      <Card className="p-4 md:p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-base md:text-lg">
            Recent Transactions
          </h3>

          <button
            onClick={() => navigate("/transactions")}
            className="text-xs md:text-sm text-indigo-600 hover:underline"
          >
            View All
          </button>
        </div>

        {expenses.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-6">
            No transactions yet — add one to get started
          </p>
        ) : (
          <div className="space-y-2">
            {recentExpenses.map((e) => (
              <div
                key={e.id}
                className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 transition"
              >
                <div className="truncate">
                  <p className="font-medium text-sm md:text-base truncate">
                    {e.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {e.category || "Other"} •{" "}
                    {e.date
                      ? new Date(e.date).toLocaleDateString()
                      : "No date"}
                  </p>
                </div>

                <span className="font-semibold text-xs md:text-sm text-red-500">
                  - ₹{e.amount}
                </span>
              </div>
            ))}
          </div>
        )}
      </Card>

    </div>
  );
}