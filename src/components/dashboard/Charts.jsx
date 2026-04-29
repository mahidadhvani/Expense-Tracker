// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

// export default function Charts({ expenses = [] }) {

//   // 🟣 CATEGORY DATA (SAFE)
//   const categoryMap = {};

//   expenses.forEach((e) => {
//     const category = (e.category || "Other").toLowerCase();
//     const amount = Number(e.amount || 0);

//     if (!categoryMap[category]) {
//       categoryMap[category] = 0;
//     }

//     categoryMap[category] += amount;
//   });

//   const categoryData = Object.keys(categoryMap).map((key) => ({
//     name: key.charAt(0).toUpperCase() + key.slice(1),
//     value: categoryMap[key],
//   }));


//   // 🔵 MONTHLY DATA (SAFE + ORDERED)
//   const monthsOrder = [
//     "Jan","Feb","Mar","Apr","May","Jun",
//     "Jul","Aug","Sep","Oct","Nov","Dec"
//   ];

//   const monthMap = {};

//   expenses.forEach((e) => {
//     const amount = Number(e.amount || 0);
//     const date = new Date(e.date || Date.now());
//     const month = date.toLocaleString("default", { month: "short" });

//     if (!monthMap[month]) {
//       monthMap[month] = 0;
//     }

//     monthMap[month] += amount;
//   });

//   const monthlyData = monthsOrder
//     .filter((m) => monthMap[m])
//     .map((m) => ({
//       name: m,
//       expense: monthMap[m],
//     }));


//   // 🚨 IF NO DATA
//   if (expenses.length === 0) {
//     return (
//       <div className="text-center text-gray-400 mt-10">
//         No data to display charts
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//       {/* 🟣 Pie Chart */}
//       <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
//         <h3 className="mb-4 font-semibold">Expense Breakdown</h3>

//         <ResponsiveContainer width="100%" height={250}>
//           <PieChart>
//             <Pie
//               data={categoryData}
//               dataKey="value"
//               outerRadius={90}
//               label
//             >
//               {categoryData.map((entry, index) => (
//                 <Cell key={index} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       {/* 🔵 Bar Chart */}
//       <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
//         <h3 className="mb-4 font-semibold">Monthly Expenses</h3>

//         <ResponsiveContainer width="100%" height={250}>
//           <BarChart data={monthlyData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="expense" fill="#6366f1" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//     </div>
//   );
// }


import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

export default function Charts({ expenses = [] }) {

  // 🟣 CATEGORY DATA
  const categoryMap = {};

  expenses.forEach((e) => {
    const category = (e.category || "Other").toLowerCase();
    const amount = Number(e.amount || 0);

    if (!categoryMap[category]) {
      categoryMap[category] = 0;
    }

    categoryMap[category] += amount;
  });

  const categoryData = Object.keys(categoryMap).map((key) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value: categoryMap[key],
  }));


  // 🔵 MONTHLY DATA
  const monthsOrder = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const monthMap = {};

  expenses.forEach((e) => {
    const amount = Number(e.amount || 0);
    const date = new Date(e.date || Date.now());
    const month = date.toLocaleString("default", { month: "short" });

    if (!monthMap[month]) {
      monthMap[month] = 0;
    }

    monthMap[month] += amount;
  });

  const monthlyData = monthsOrder
    .filter((m) => monthMap[m])
    .map((m) => ({
      name: m,
      expense: monthMap[m],
    }));


  // 🚨 EMPTY STATE
  if (expenses.length === 0) {
    return (
      <div className="text-center text-gray-400 mt-10">
        No data to display charts
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* 🟣 Pie Chart */}
      <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="mb-4 font-semibold">Expense Breakdown</h3>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              outerRadius={90}
              label
            >
              {categoryData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 🔵 Bar Chart */}
      <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
        <h3 className="mb-4 font-semibold">Monthly Expenses</h3>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={monthlyData}>

            {/* 🔥 Gradient Definition */}
            <defs>
              <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#0d9488" />
              </linearGradient>
            </defs>

            {/* ✨ Clean Grid */}
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            {/* ✅ Rounded + Gradient Bars */}
            <Bar
              dataKey="expense"
              fill="url(#tealGradient)"
              radius={[10, 10, 0, 0]}   // 👈 rounded top corners
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

