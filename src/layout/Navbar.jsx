// import { useAuth } from "../context/AuthContext";

// export default function Navbar() {
//   const { user } = useAuth();

//   return (
//     <div className="flex justify-between items-center p-5 bg-white shadow">

//       {/* 👋 Welcome Section */}
//       <div>
//         <h2 className="text-lg font-semibold">
//           Welcome back, {user?.name || "User"} 👋
//         </h2>
//         <p className="text-sm text-gray-500">
//           Track your finances easily
//         </p>
//       </div>

//       {/* ❌ Add Expense Button Removed */}

//     </div>
//   );
// }





// import Button from "../components/ui/Button";
// import { useAuth } from "../context/AuthContext";
// import { Plus } from "lucide-react";

// export default function Navbar({ onAdd }) {
//   const { user } = useAuth();

//   return (
//     <div className="flex justify-between items-center p-5 bg-white shadow">

//       {/* 👋 Welcome Section */}
//       <div>
//         <h2 className="text-lg font-semibold">
//           Welcome back, {user?.name || "User"} 👋
//         </h2>
//         <p className="text-sm text-gray-500">
//           Track your finances easily
//         </p>
//       </div>

//       {/* ➕ Add Expense Button (WORKING) */}
//       <Button
//         onClick={onAdd}
//         className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow"
//       >
//         <Plus size={16} />
//         Add Expense
//       </Button>

//     </div>
//   );
// }





import { Menu, Plus } from "lucide-react";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ onAdd, onMenuClick }) {
  const { user } = useAuth();

  return (
    <div className="flex justify-between items-center p-4 md:p-5 bg-white shadow">

      {/* 🔥 Hamburger (mobile only) */}
      <button
        onClick={onMenuClick}
        className="md:hidden"
      >
        <Menu />
      </button>

      <div>
        <h2 className="text-sm md:text-lg font-semibold">
          Welcome back, {user?.name} 👋
        </h2>
        <p className="text-xs md:text-sm text-gray-500">
          Track your finances easily
        </p>
      </div>

      <Button onClick={onAdd} className="flex items-center gap-2">
        <Plus size={16} />
        <span className="hidden sm:inline">Add Expenses</span>
      </Button>
    </div>
  );
}