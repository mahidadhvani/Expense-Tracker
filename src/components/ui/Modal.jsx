// import { useState, useEffect } from "react";
// import Button from "./Button";

// export default function Modal({ isOpen, onClose, onSave, editData }) {
//   const [form, setForm] = useState({
//     title: "",
//     amount: "",
//     category: "Food",
//     date: "",
//   });

//   // 🔄 Fill form when editing
//   useEffect(() => {
//     if (editData) {
//       setForm(editData);
//     } else {
//       setForm({
//         title: "",
//         amount: "",
//         category: "Food",
//         date: "",
//       });
//     }
//   }, [editData]);

//   if (!isOpen) return null;

//   const handleSubmit = () => {
//     // 🚨 Validation
//     if (!form.title || !form.amount) {
//       alert("Please fill all fields");
//       return;
//     }

//     const newExpense = {
//       ...form,
//       amount: Number(form.amount), // 🔥 VERY IMPORTANT
//       id: editData?.id || Date.now(), // handle add/edit
//     };

//     console.log("Saving:", newExpense); // 🔍 DEBUG

//     onSave(newExpense);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-2xl w-[400px] space-y-4">
        
//         <h2 className="text-lg font-bold">
//           {editData ? "Edit Expense" : "Add Expense"}
//         </h2>

//         {/* Title */}
//         <input
//           type="text"
//           placeholder="Title"
//           className="w-full border p-2 rounded"
//           value={form.title}
//           onChange={(e) =>
//             setForm({ ...form, title: e.target.value })
//           }
//         />

//         {/* Amount */}
//         <input
//           type="number"
//           placeholder="Amount"
//           className="w-full border p-2 rounded"
//           value={form.amount}
//           onChange={(e) =>
//             setForm({ ...form, amount: e.target.value })
//           }
//         />

//         {/* Category */}
//         <select
//           className="w-full border p-2 rounded"
//           value={form.category}
//           onChange={(e) =>
//             setForm({ ...form, category: e.target.value })
//           }
//         >
//           <option>Food</option>
//           <option>Travel</option>
//           <option>Shopping</option>
//           <option>Other</option>
//         </select>

//         {/* 🔥 Date (IMPORTANT for charts) */}
//         <input
//           type="date"
//           className="w-full border p-2 rounded"
//           value={form.date}
//           onChange={(e) =>
//             setForm({ ...form, date: e.target.value })
//           }
//         />

//         {/* Buttons */}
//         <div className="flex justify-end gap-2">
//           <Button onClick={onClose}>Cancel</Button>
//           <Button onClick={handleSubmit}>
//             {editData ? "Update" : "Save"}
//           </Button>
//         </div>

//       </div>
//     </div>
//   );
// }





// import { useState, useEffect } from "react";
// import Button from "./Button";

// export default function Modal({ isOpen, onClose, onSave, editData }) {
//   const [form, setForm] = useState({
//     title: "",
//     amount: "",
//     category: "Food",
//     date: "",
//   });

//   // ✏️ Fill form when editing
//   useEffect(() => {
//     if (editData) {
//       setForm(editData);
//     }
//   }, [editData]);

//   if (!isOpen) return null;

//   const handleSubmit = () => {
//     if (!form.title || !form.amount) return;

//     onSave({
//       ...form,
//       amount: Number(form.amount),
//     });

//     onClose();

//     // 🔄 Reset form
//     setForm({
//       title: "",
//       amount: "",
//       category: "Food",
//       date: "",
//     });
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-2xl w-[400px] space-y-4 shadow-lg">

//         <h2 className="text-lg font-bold">
//           {editData ? "Edit Expense" : "Add Expense"}
//         </h2>

//         {/* Title */}
//         <input
//           type="text"
//           placeholder="Title"
//           className="w-full border p-2 rounded"
//           value={form.title}
//           onChange={(e) =>
//             setForm({ ...form, title: e.target.value })
//           }
//         />

//         {/* Amount */}
//         <input
//           type="number"
//           placeholder="Amount"
//           className="w-full border p-2 rounded"
//           value={form.amount}
//           onChange={(e) =>
//             setForm({ ...form, amount: e.target.value })
//           }
//         />

//         {/* Category */}
//         <select
//           className="w-full border p-2 rounded"
//           value={form.category}
//           onChange={(e) =>
//             setForm({ ...form, category: e.target.value })
//           }
//         >
//           <option>Food</option>
//           <option>Travel</option>
//           <option>Shopping</option>
//           <option>Other</option>
//         </select>

//         {/* 📅 Date (NEW) */}
//         <input
//           type="date"
//           className="w-full border p-2 rounded"
//           value={form.date || ""}
//           onChange={(e) =>
//             setForm({ ...form, date: e.target.value })
//           }
//         />

//         {/* Buttons */}
//         <div className="flex justify-end gap-2">
//           <Button onClick={onClose}>Cancel</Button>
//           <Button onClick={handleSubmit}>Save</Button>
//         </div>

//       </div>
//     </div>
//   );
// }






import { useState, useEffect } from "react";
import Button from "./Button";

export default function Modal({ isOpen, onClose, onSave, editData }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: "",
  });

  // ✏️ Fill form when editing
  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!form.title || !form.amount) return;

    onSave({
      ...form,
      amount: Number(form.amount),
    });

    onClose();

    // 🔄 Reset form
    setForm({
      title: "",
      amount: "",
      category: "Food",
      date: "",
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-3">

      {/* 📦 Modal Box (Responsive) */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-4 md:p-6 relative space-y-4">

        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black text-lg"
        >
          ✕
        </button>

        {/* 📝 Title */}
        <h2 className="text-base md:text-lg font-bold">
          {editData ? "Edit Expense" : "Add Expense"}
        </h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded-lg text-sm md:text-base"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        {/* Amount */}
        <input
          type="number"
          placeholder="Amount"
          className="w-full border p-2 rounded-lg text-sm md:text-base"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

        {/* Category */}
        <select
          className="w-full border p-2 rounded-lg text-sm md:text-base"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Other</option>
        </select>

        {/* 📅 Date */}
        <input
          type="date"
          className="w-full border p-2 rounded-lg text-sm md:text-base"
          value={form.date || ""}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-end gap-2 pt-2">
          <Button
            onClick={onClose}
            className="w-full md:w-auto"
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
            className="w-full md:w-auto"
          >
            Save
          </Button>
        </div>

      </div>
    </div>
  );
}