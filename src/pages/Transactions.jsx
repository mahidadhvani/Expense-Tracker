// import { useExpenses } from "../context/ExpenseContext";

// export default function Transactions() {
//   const { expenses, deleteExpense } = useExpenses();

//   return (
//     <div className="p-6">
//       <h2 className="text-xl mb-4">Transactions</h2>

//       {expenses.map(e => (
//         <div key={e.id} className="flex justify-between bg-white p-3 mb-2 rounded shadow">
//           <div>
//             <p>{e.title}</p>
//             <p className="text-sm text-gray-500">{e.category}</p>
//           </div>

//           <div className="flex gap-3">
//             <span>₹{e.amount}</span>
//             <button
//               onClick={() => deleteExpense(e.id)}
//               className="text-red-500"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import { useExpenses } from "../context/ExpenseContext";
// import Card from "../components/ui/Card";
// import { Pencil, Trash2 } from "lucide-react";

// export default function Transactions({ setEditData, setOpen }) {
//   const { expenses, deleteExpense } = useExpenses();

//   // 🔍 Search + Filter State
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");

//   // 📄 Pagination State
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // 🔄 Filter Logic
//   const filteredExpenses = expenses.filter((e) => {
//     const matchSearch = e.title
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchCategory =
//       category === "All" || e.category === category;

//     return matchSearch && matchCategory;
//   });

//   // 🔁 Reset page when filter/search changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search, category]);

//   // 🔢 Pagination Logic
//   const indexOfLast = currentPage * itemsPerPage;
//   const indexOfFirst = indexOfLast - itemsPerPage;

//   const currentData = filteredExpenses.slice(
//     indexOfFirst,
//     indexOfLast
//   );

//   const totalPages = Math.ceil(
//     filteredExpenses.length / itemsPerPage
//   );

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">

//       {/* 🔷 Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold">Transactions</h2>
//       </div>

//       {/* 🔍 Search + Filter UI */}
//       <div className="flex gap-3 mb-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border p-2 rounded w-1/2"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <select
//           className="border p-2 rounded"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option>All</option>
//           <option>Food</option>
//           <option>Travel</option>
//           <option>Shopping</option>
//           <option>Other</option>
//         </select>
//       </div>

//       {/* 📦 Table Card */}
//       <Card>
//         {filteredExpenses.length === 0 ? (
//           <p className="text-gray-400 text-sm">
//             No transactions found
//           </p>
//         ) : (
//           <>
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm">

//                 {/* 🔵 Table Head */}
//                 <thead>
//                   <tr className="text-left text-gray-500 border-b">
//                     <th className="py-3">Title</th>
//                     <th>Category</th>
//                     <th>Date</th>
//                     <th>Amount</th>
//                     <th className="text-right">Actions</th>
//                   </tr>
//                 </thead>

//                 {/* 🔻 Table Body */}
//                 <tbody>
//                   {currentData.map((e) => (
//                     <tr
//                       key={e.id}
//                       className="border-b hover:bg-gray-50 transition"
//                     >
//                       <td className="py-3 font-medium">{e.title}</td>

//                       <td className="text-gray-500">
//                         {e.category || "Other"}
//                       </td>

//                       <td className="text-gray-500">
//                         {e.date
//                           ? new Date(e.date).toLocaleDateString()
//                           : "—"}
//                       </td>

//                       <td className="font-semibold text-red-500">
//                         ₹{e.amount}
//                       </td>

//                       {/* ✏️ Actions */}
//                       <td className="flex justify-end gap-3 py-3">

//                         {/* Edit */}
//                         <button
//                           onClick={() => {
//                             setEditData(e);
//                             setOpen(true);
//                           }}
//                           className="text-blue-500 hover:text-blue-600"
//                         >
//                           <Pencil size={16} />
//                         </button>

//                         {/* Delete */}
//                         <button
//                           onClick={() => {
//                             if (window.confirm("Delete this transaction?")) {
//                               deleteExpense(e.id);
//                             }
//                           }}
//                           className="text-red-500 hover:text-red-600"
//                         >
//                           <Trash2 size={16} />
//                         </button>

//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>

//               </table>
//             </div>

//             {/* 🔢 Pagination UI */}
//             {totalPages > 1 && (
//               <div className="flex justify-center mt-4 gap-2">

//                 <button
//                   disabled={currentPage === 1}
//                   onClick={() => setCurrentPage((p) => p - 1)}
//                   className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//                 >
//                   Prev
//                 </button>

//                 {[...Array(totalPages)].map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setCurrentPage(i + 1)}
//                     className={`px-3 py-1 rounded ${
//                       currentPage === i + 1
//                         ? "bg-indigo-600 text-white"
//                         : "bg-gray-200"
//                     }`}
//                   >
//                     {i + 1}
//                   </button>
//                 ))}

//                 <button
//                   disabled={currentPage === totalPages}
//                   onClick={() => setCurrentPage((p) => p + 1)}
//                   className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
//                 >
//                   Next
//                 </button>

//               </div>
//             )}
//           </>
//         )}
//       </Card>
//     </div>
//   );
// }




import { useState, useEffect } from "react";
import { useExpenses } from "../context/ExpenseContext";
import Card from "../components/ui/Card";
import { Pencil, Trash2 } from "lucide-react";

export default function Transactions({ setEditData, setOpen }) {
  const { expenses, deleteExpense } = useExpenses();

  // 🔍 Search + Filter State
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // 📄 Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 🔄 Filter Logic
  const filteredExpenses = expenses.filter((e) => {
    const matchSearch = e.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || e.category === category;

    return matchSearch && matchCategory;
  });

  // 🔁 Reset page when filter/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  // 🔢 Pagination Logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentData = filteredExpenses.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(
    filteredExpenses.length / itemsPerPage
  );

  // 📥 EXPORT CSV FUNCTION
  const exportToCSV = () => {
    const headers = ["Title", "Category", "Amount", "Date"];

    const rows = filteredExpenses.map((e) => [
      e.title,
      e.category || "Other",
      e.amount,
      e.date
        ? new Date(e.date).toLocaleDateString()
        : "",
    ]);

    const csvContent =
      [headers, ...rows]
        .map((row) => row.join(","))
        .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "transactions.csv";
    link.click();
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* 🔷 Header + Export */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Transactions</h2>

        <button
          onClick={exportToCSV}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow"
        >
          Export CSV
        </button>
      </div>

      {/* 🔍 Search + Filter UI (UPGRADED) */}
      <div className="flex gap-3 mb-5 bg-white p-3 rounded-xl shadow-sm">
        <input
          type="text"
          placeholder="🔍 Search transactions..."
          className="flex-1 outline-none bg-gray-50 px-3 py-2 rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="bg-gray-50 px-3 py-2 rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Other</option>
        </select>
      </div>

      {/* 📊 Result Count */}
      <p className="text-sm text-gray-500 mb-2">
        Showing {filteredExpenses.length} transactions
      </p>

      {/* 📦 Table Card */}
      <Card>
        {filteredExpenses.length === 0 ? (
          <p className="text-center text-gray-400 py-10">
            No transactions found 🚫
          </p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">

                {/* 🔵 Table Head */}
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="py-3">Title</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>

                {/* 🔻 Table Body */}
                <tbody>
                  {currentData.map((e) => (
                    <tr
                      key={e.id}
                      className="border-b hover:bg-indigo-50 transition duration-200"
                    >
                      <td className="py-3 font-medium">{e.title}</td>

                      <td className="text-gray-500">
                        {e.category || "Other"}
                      </td>

                      <td className="text-gray-500">
                        {e.date
                          ? new Date(e.date).toLocaleDateString()
                          : "—"}
                      </td>

                      <td className="font-semibold text-red-500">
                        - ₹{e.amount}
                      </td>

                      {/* ✏️ Actions */}
                      <td className="flex justify-end gap-3 py-3">

                        {/* Edit */}
                        <button
                          onClick={() => {
                            setEditData(e);
                            setOpen(true);
                          }}
                          className="text-blue-500 hover:text-blue-600"
                        >
                          <Pencil size={16} />
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => {
                            if (window.confirm("Delete this transaction?")) {
                              deleteExpense(e.id);
                            }
                          }}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>

                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            {/* 🔢 Pagination UI */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-4 gap-2">

                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                  Prev
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                  Next
                </button>

              </div>
            )}
          </>
        )}
      </Card>
    </div>
  );
}
