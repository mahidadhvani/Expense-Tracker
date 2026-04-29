// import Charts from "../components/dashboard/Charts";
// import { useExpenses } from "../context/ExpenseContext";

// export default function Analytics() {
//   const { expenses } = useExpenses();

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-xl font-semibold mb-4">Analytics</h2>

//       <Charts expenses={expenses} />
//     </div>
//   );
// }





// import { useExpenses } from "../context/ExpenseContext";
// import Card from "../components/ui/Card";

// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

// export default function Analytics() {
//   const { expenses } = useExpenses();

//   // 🔥 Category breakdown
//   const categoryMap = {};

//   expenses.forEach((e) => {
//     const cat = e.category || "Other";
//     categoryMap[cat] = (categoryMap[cat] || 0) + e.amount;
//   });

//   const data = Object.keys(categoryMap).map((key) => ({
//     name: key,
//     value: categoryMap[key],
//   }));

//   // 📊 Insights
//   const total = expenses.reduce((a, b) => a + b.amount, 0);
//   const max = Math.max(...expenses.map((e) => e.amount), 0);

//   return (
//     <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

//       <h2 className="text-xl font-semibold">Analytics</h2>

//       {/* 🔢 Insight Cards */}
//       <div className="grid grid-cols-2 gap-4">

//         <Card>
//           <p className="text-gray-500 text-sm">Total Spending</p>
//           <h2 className="text-xl font-bold text-red-500">
//             ₹{total}
//           </h2>
//         </Card>

//         <Card>
//           <p className="text-gray-500 text-sm">Highest Expense</p>
//           <h2 className="text-xl font-bold">
//             ₹{max}
//           </h2>
//         </Card>

//       </div>

//       {/* 🟣 Pie Chart */}
//       <Card>
//         <h3 className="mb-4 font-semibold">
//           Category Distribution
//         </h3>

//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie data={data} dataKey="value" outerRadius={100}>
//               {data.map((entry, index) => (
//                 <Cell
//                   key={index}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </Card>

//     </div>
//   );
// }


// import { useExpenses } from "../context/ExpenseContext";
// import Charts from "../components/dashboard/Charts";

// export default function Analytics() {
//   const { expenses } = useExpenses();

//   // 🔥 TOTAL EXPENSE
//   const total = expenses.reduce((sum, e) => sum + e.amount, 0);

//   // 🔥 CATEGORY CALCULATION
//   const categoryMap = {};
//   expenses.forEach((e) => {
//     const cat = e.category || "Other";
//     categoryMap[cat] = (categoryMap[cat] || 0) + e.amount;
//   });

//   // 🔥 TOP CATEGORY
//   const topCategory =
//     Object.keys(categoryMap).length > 0
//       ? Object.keys(categoryMap).reduce((a, b) =>
//           categoryMap[a] > categoryMap[b] ? a : b
//         )
//       : "—";

//   // 🔥 AVERAGE EXPENSE
//   const avg = expenses.length
//     ? Math.round(total / expenses.length)
//     : 0;

//   // 🔥 HIGHEST EXPENSE
//   const maxExpense = expenses.length
//     ? Math.max(...expenses.map((e) => e.amount))
//     : 0;

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen space-y-6">

//       {/* 🔷 PAGE TITLE */}
//       <div>
//         <h2 className="text-2xl font-bold">Analytics</h2>
//         <p className="text-gray-500 text-sm">
//           Understand your spending patterns
//         </p>
//       </div>

//       {/* 🔥 INSIGHTS CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

//         <div className="bg-white p-5 rounded-2xl shadow">
//           <p className="text-gray-500 text-sm">Top Category</p>
//           <h2 className="text-xl font-bold text-indigo-600">
//             {topCategory}
//           </h2>
//         </div>

//         <div className="bg-white p-5 rounded-2xl shadow">
//           <p className="text-gray-500 text-sm">Average Expense</p>
//           <h2 className="text-xl font-bold text-green-500">
//             ₹{avg}
//           </h2>
//         </div>

//         <div className="bg-white p-5 rounded-2xl shadow">
//           <p className="text-gray-500 text-sm">Highest Expense</p>
//           <h2 className="text-xl font-bold text-red-500">
//             ₹{maxExpense}
//           </h2>
//         </div>

//       </div>

//       {/* 📊 CHARTS */}
//       <div>
//         <Charts expenses={expenses} />
//       </div>

//       {/* 💡 SMART INSIGHT MESSAGE */}
//       <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl">
//         {expenses.length === 0 ? (
//           <p className="text-gray-500 text-sm">
//             No data yet. Start adding expenses to see insights.
//           </p>
//         ) : (
//           <p className="text-gray-700">
//             💡 You are spending most on{" "}
//             <span className="font-semibold text-indigo-600">
//               {topCategory}
//             </span>
//             . Try to reduce spending in this category to save more.
//           </p>
//         )}
//       </div>

//     </div>
//   );
// }



// import { useExpenses } from "../context/ExpenseContext";
// import Charts from "../components/dashboard/Charts";
// import { useNavigate } from "react-router-dom";

// export default function Analytics() {
//   const { expenses } = useExpenses();
//   const navigate = useNavigate();

//   // 🔥 TOTAL EXPENSE
//   const totalExpense = expenses.reduce(
//     (sum, e) => sum + Number(e.amount || 0),
//     0
//   );

//   // 🔥 CATEGORY CALCULATION
//   const categoryMap = {};
//   expenses.forEach((e) => {
//     const cat = e.category || "Other";
//     categoryMap[cat] = (categoryMap[cat] || 0) + Number(e.amount || 0);
//   });

//   // 🔥 TOP CATEGORY
//   const topCategory =
//     Object.keys(categoryMap).length > 0
//       ? Object.keys(categoryMap).reduce((a, b) =>
//           categoryMap[a] > categoryMap[b] ? a : b
//         )
//       : "—";

//   // 🔥 AVG DAILY (simple version)
//   const avgDaily = expenses.length
//     ? Math.round(totalExpense / expenses.length)
//     : 0;

//   // 🔥 MONTHLY TREND
//   const currentMonth = new Date().getMonth();

//   const thisMonthExpense = expenses
//     .filter(
//       (e) =>
//         e.date &&
//         new Date(e.date).getMonth() === currentMonth
//     )
//     .reduce((sum, e) => sum + Number(e.amount || 0), 0);

//   const lastMonthExpense = expenses
//     .filter(
//       (e) =>
//         e.date &&
//         new Date(e.date).getMonth() === currentMonth - 1
//     )
//     .reduce((sum, e) => sum + Number(e.amount || 0), 0);

//   const trend =
//     lastMonthExpense === 0
//       ? 0
//       : Math.round(
//           ((thisMonthExpense - lastMonthExpense) /
//             lastMonthExpense) *
//             100
//         );

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen space-y-6">

//       {/* 🔷 HEADER */}
//       <div>
//         <h2 className="text-2xl font-bold">Analytics</h2>
//         <p className="text-gray-500 text-sm">
//           Understand your spending patterns
//         </p>
//       </div>

//       {/* 🚨 EMPTY STATE */}
//       {expenses.length === 0 ? (
//         <div className="flex flex-col items-center justify-center py-16 text-gray-400">
//           <div className="text-5xl mb-3">📊</div>
//           <p className="text-sm mb-3">
//             No analytics data yet
//           </p>

//           <button
//             onClick={() => navigate("/transactions")}
//             className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm"
//           >
//             Add your first expense
//           </button>
//         </div>
//       ) : (
//         <>
//           {/* 🔥 INSIGHTS CARDS (UPGRADED) */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

//             {/* Total Expense */}
//             <div className="bg-white p-5 rounded-2xl shadow">
//               <p className="text-gray-500 text-sm">
//                 Total Expense
//               </p>
//               <h2 className="text-xl font-bold text-red-500">
//                 ₹{totalExpense}
//               </h2>
//             </div>

//             {/* Top Category */}
//             <div className="bg-white p-5 rounded-2xl shadow">
//               <p className="text-gray-500 text-sm">
//                 Top Category
//               </p>
//               <h2 className="text-xl font-bold text-indigo-600">
//                 {topCategory}
//               </h2>
//             </div>

//             {/* Avg Daily */}
//             <div className="bg-white p-5 rounded-2xl shadow">
//               <p className="text-gray-500 text-sm">
//                 Avg Daily
//               </p>
//               <h2 className="text-xl font-bold text-green-500">
//                 ₹{avgDaily}
//               </h2>
//             </div>

//             {/* Monthly Trend */}
//             <div className="bg-white p-5 rounded-2xl shadow">
//               <p className="text-gray-500 text-sm">
//                 Monthly Trend
//               </p>
//               <h2
//                 className={`text-xl font-bold ${
//                   trend > 0
//                     ? "text-red-500"
//                     : "text-green-500"
//                 }`}
//               >
//                 {trend > 0
//                   ? `↑ ${trend}%`
//                   : `↓ ${Math.abs(trend)}%`}
//               </h2>
//             </div>

//           </div>

//           {/* 📊 CHARTS */}
//           <Charts expenses={expenses} />

//           {/* 💡 SMART INSIGHT MESSAGE */}
//           <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl">
//             <p className="text-gray-700 text-sm">
//               💡 You are spending most on{" "}
//               <span className="font-semibold text-indigo-600">
//                 {topCategory}
//               </span>
//               .{" "}
//               {trend > 0
//                 ? "Your expenses increased compared to last month. Try to optimize your spending."
//                 : "Great! Your expenses are under control compared to last month."}
//             </p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }





import { useExpenses } from "../context/ExpenseContext";
import Charts from "../components/dashboard/Charts";
import { useNavigate } from "react-router-dom";

export default function Analytics() {
  const { expenses } = useExpenses();
  const navigate = useNavigate();

  // 🔥 TOTAL EXPENSE
  const totalExpense = expenses.reduce(
    (sum, e) => sum + Number(e.amount || 0),
    0
  );

  // 🔥 CATEGORY CALCULATION
  const categoryMap = {};
  expenses.forEach((e) => {
    const cat = e.category || "Other";
    categoryMap[cat] = (categoryMap[cat] || 0) + Number(e.amount || 0);
  });

  // 🔥 TOP CATEGORY
  const topCategory =
    Object.keys(categoryMap).length > 0
      ? Object.keys(categoryMap).reduce((a, b) =>
          categoryMap[a] > categoryMap[b] ? a : b
        )
      : "—";

  // ✅ 🔥 REAL AVG DAILY (UPDATED LOGIC)
  const uniqueDays =
    new Set(
      expenses.map((e) =>
        e.date ? new Date(e.date).toDateString() : null
      )
    ).size || 1;

  const avgDaily = Math.round(totalExpense / uniqueDays);

  // 🔥 MONTHLY TREND
  const currentMonth = new Date().getMonth();

  const thisMonthExpense = expenses
    .filter(
      (e) =>
        e.date &&
        new Date(e.date).getMonth() === currentMonth
    )
    .reduce((sum, e) => sum + Number(e.amount || 0), 0);

  const lastMonthExpense = expenses
    .filter(
      (e) =>
        e.date &&
        new Date(e.date).getMonth() === currentMonth - 1
    )
    .reduce((sum, e) => sum + Number(e.amount || 0), 0);

  const trend =
    lastMonthExpense === 0
      ? 0
      : Math.round(
          ((thisMonthExpense - lastMonthExpense) /
            lastMonthExpense) *
            100
        );

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">

      {/* 🔷 HEADER */}
      <div>
        <h2 className="text-2xl font-bold">Analytics</h2>
        <p className="text-gray-500 text-sm">
          Understand your spending patterns
        </p>
      </div>

      {/* 🚨 EMPTY STATE */}
      {expenses.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
          <div className="text-5xl mb-3">📊</div>
          <p className="text-sm mb-3">
            No analytics data yet
          </p>

          <button
            onClick={() => navigate("/transactions")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Add your first expense
          </button>
        </div>
      ) : (
        <>
          {/* 🔥 INSIGHT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Total Expense */}
            <div className="bg-white p-5 rounded-2xl shadow">
              <p className="text-gray-500 text-sm">
                Total Expense
              </p>
              <h2 className="text-xl font-bold text-red-500">
                ₹{totalExpense}
              </h2>
            </div>

            {/* Top Category */}
            <div className="bg-white p-5 rounded-2xl shadow">
              <p className="text-gray-500 text-sm">
                Top Category
              </p>
              <h2 className="text-xl font-bold text-indigo-600">
                {topCategory}
              </h2>
            </div>

            {/* Avg Daily */}
            <div className="bg-white p-5 rounded-2xl shadow">
              <p className="text-gray-500 text-sm">
                Avg Daily
              </p>
              <h2 className="text-xl font-bold text-green-500">
                ₹{avgDaily}
              </h2>
            </div>

            {/* Monthly Trend */}
            <div className="bg-white p-5 rounded-2xl shadow">
              <p className="text-gray-500 text-sm">
                Monthly Trend
              </p>
              <h2
                className={`text-xl font-bold ${
                  trend > 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {trend > 0
                  ? `↑ ${trend}%`
                  : `↓ ${Math.abs(trend)}%`}
              </h2>
            </div>

          </div>

          {/* 📊 CHARTS */}
          <Charts expenses={expenses} />

          {/* 💡 SMART INSIGHT */}
          <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl">
            <p className="text-gray-700 text-sm">
              💡 You are spending most on{" "}
              <span className="font-semibold text-indigo-600">
                {topCategory}
              </span>
              .{" "}
              {trend > 0
                ? "Your expenses increased compared to last month. Try to control spending."
                : "Great! Your expenses are under control compared to last month."}
            </p>
          </div>
        </>
      )}
    </div>
  );
}