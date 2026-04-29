// import { NavLink } from "react-router-dom";

// const linkClass =
//   "flex items-center gap-3 p-3 rounded-xl text-gray-300 hover:bg-white/10";

// const activeClass = "bg-white/10 text-white";

// export default function Sidebar() {
//   return (
//     <div className="w-64 h-screen bg-gradient-to-b from-slate-900 to-black p-5">
//       <h1 className="text-white text-xl font-bold mb-8">ExpenseTrack</h1>

//       <nav className="flex flex-col gap-2">
//         <NavLink to="/" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
//           🏠 Dashboard
//         </NavLink>

//         <NavLink to="/transactions" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
//           💳 Transactions
//         </NavLink>

//         <NavLink to="/analytics" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
//           📊 Analytics
//         </NavLink>

//         <NavLink to="/budget" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
//           🎯 Budget
//         </NavLink>

//         <NavLink to="/settings" className={({ isActive }) => isActive ? `${linkClass} ${activeClass}` : linkClass}>
//           ⚙️ Settings
//         </NavLink>
//       </nav>
//     </div>
//   );
// }



// import { NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Receipt,
//   BarChart3,
//   Target,
//   Settings,
// } from "lucide-react";

// const baseClass =
//   "flex items-center gap-3 p-3 rounded-xl text-gray-300 transition-all";

// const activeClass =
//   "bg-white/10 text-white border-l-4 border-indigo-500";

// export default function Sidebar() {
//   return (
//     <div className="w-64 h-screen bg-gradient-to-b from-slate-900 to-black p-5 flex flex-col">

//       {/* 🔷 Logo */}
//       <h1 className="text-white text-xl font-bold mb-8">
//         ExpenseTrack
//       </h1>

//       {/* 🧭 Navigation */}
//       <nav className="flex flex-col gap-2">

//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }
//         >
//           <LayoutDashboard size={18} />
//           Dashboard
//         </NavLink>

//         <NavLink
//           to="/transactions"
//           className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }
//         >
//           <Receipt size={18} />
//           Transactions
//         </NavLink>

//         {/* ✅ UPDATED LINKS (your requirement) */}
//         <NavLink
//           to="/analytics"
//           className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }
//         >
//           <BarChart3 size={18} />
//           Analytics
//         </NavLink>

//         <NavLink
//           to="/budget"
//           className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }
//         >
//           <Target size={18} />
//           Budget
//         </NavLink>

//         <NavLink
//           to="/settings"
//           className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }
//         >
//           <Settings size={18} />
//           Settings
//         </NavLink>

//       </nav>

//       {/* 🔻 Bottom Section (optional upgrade) */}
//       <div className="mt-auto text-xs text-gray-500">
//         © 2026 ExpenseTrack
//       </div>
//     </div>
//   );
// }





// import { NavLink } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// import {
//   LayoutDashboard,
//   Receipt,
//   BarChart3,
//   Target,
//   Settings,
// } from "lucide-react";

// const baseClass =
//   "flex items-center gap-3 p-3 rounded-xl text-gray-300 transition-all";

// const activeClass =
//   "bg-white/10 text-white border-l-4 border-indigo-500";

// export default function Sidebar() {
//   const { user, logout } = useAuth();

//   return (
//     <div className="w-64 h-screen bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 p-5 flex flex-col">

//       {/* 🔷 Logo */}
//       <h1 className="text-white text-xl font-bold mb-8">
//         ExpenseTrack
//       </h1>

//       {/* 🧭 Navigation */}
//       <nav className="flex flex-col gap-2">

//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }
//         >
//           <LayoutDashboard size={18} />
//           Dashboard
//         </NavLink>

//         <NavLink
//           to="/transactions"
//           className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }
//         >
//           <Receipt size={18} />
//           Transactions
//         </NavLink>

//         <NavLink
//           to="/analytics"
//           className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }
//         >
//           <BarChart3 size={18} />
//           Analytics
//         </NavLink>

//         <NavLink
//           to="/budget"
//           className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }
//         >
//           <Target size={18} />
//           Budget
//         </NavLink>

//         <NavLink
//           to="/settings"
//           className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }
//         >
//           <Settings size={18} />
//           Settings
//         </NavLink>

//       </nav>

//       {/* 👤 USER SECTION */}
//       <div className="mt-auto space-y-3">

//         {/* User Card */}
//         <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3">

        
//         {/* Avatar */}
// <div className="w-10 h-10 min-w-[30px] rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
//   {user?.name?.charAt(0).toUpperCase()}
// </div>

//           {/* Name + Email */}
//           <div>
//             <p className="text-sm text-white font-semibold">
//               {user?.name}
//             </p>
//             <p className="text-xs text-gray-400">
//               {user?.email}
//             </p>
//           </div>
//         </div>

//         {/* 🔵 Logout Button */}
//         <button
//           onClick={logout}
//           className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm py-2 rounded-xl transition"
//         >
//           Logout
//         </button>

//       </div>

//     </div>
//   );
// }









// import { NavLink } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import {
//   LayoutDashboard,
//   Receipt,
//   BarChart3,
//   Target,
//   Settings,
// } from "lucide-react";

// const baseClass =
//   "flex items-center gap-3 p-3 rounded-xl text-gray-300 transition-all";

// const activeClass =
//   "bg-white/10 text-white border-l-4 border-indigo-500";

// export default function Sidebar({ isOpen, setIsOpen }) {
//   const { user, logout } = useAuth();

//   return (
//     <>
//       {/* 🔥 Overlay (mobile) */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       <div
//         className={`fixed md:static z-50 top-0 left-0 h-screen w-64 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 p-5 flex flex-col transform transition-transform duration-300
//         ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
//       >
//         <h1 className="text-white text-xl font-bold mb-8">
//           ExpenseTrack
//         </h1>

//         <nav className="flex flex-col gap-2">
//           <NavLink to="/" className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }>
//             <LayoutDashboard size={18} /> Dashboard
//           </NavLink>

//           <NavLink to="/transactions" className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }>
//             <Receipt size={18} /> Transactions
//           </NavLink>

//           <NavLink to="/analytics" className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }>
//             <BarChart3 size={18} /> Analytics
//           </NavLink>

//           <NavLink to="/budget" className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }>
//             <Target size={18} /> Budget
//           </NavLink>

//           <NavLink to="/settings" className={({ isActive }) =>
//             isActive ? `${baseClass} ${activeClass}` : baseClass
//           }>
//             <Settings size={18} /> Settings
//           </NavLink>
//         </nav>

//         {/* User */}
//         <div className="mt-auto space-y-3">
//           <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
//               {user?.name?.charAt(0).toUpperCase()}
//             </div>

//             <div>
//               <p className="text-sm text-white font-semibold">
//                 {user?.name}
//               </p>
//               <p className="text-xs text-gray-400">
//                 {user?.email}
//               </p>
//             </div>
//           </div>

//           <button
//             onClick={logout}
//             className="w-full bg-indigo-600 text-white py-2 rounded-xl"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }









import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  LayoutDashboard,
  Receipt,
  BarChart3,
  Target,
  Settings,
} from "lucide-react";

const baseClass =
  "flex items-center gap-3 p-3 rounded-xl text-gray-300 transition-all";

const activeClass =
  "bg-white/10 text-white border-l-4 border-indigo-500";

export default function Sidebar({ isOpen, onClose }) {
  const { user, logout } = useAuth();

  return (
    <>
      {/* 🔥 Overlay (mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed md:static z-50 top-0 left-0 h-screen w-64 
        bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 
        p-5 flex flex-col transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h1 className="text-white text-xl font-bold mb-8">
          ExpenseTrack
        </h1>

        <nav className="flex flex-col gap-2">

          {/* ✅ IMPORTANT: close sidebar on click */}
          <NavLink to="/" onClick={onClose} className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }>
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>

          <NavLink to="/transactions" onClick={onClose} className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }>
            <Receipt size={18} /> Transactions
          </NavLink>

          <NavLink to="/analytics" onClick={onClose} className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }>
            <BarChart3 size={18} /> Analytics
          </NavLink>

          <NavLink to="/budget" onClick={onClose} className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }>
            <Target size={18} /> Budget
          </NavLink>

          <NavLink to="/settings" onClick={onClose} className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }>
            <Settings size={18} /> Settings
          </NavLink>

        </nav>

        {/* 👤 User */}
        <div className="mt-auto space-y-3">
          <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <p className="text-sm text-white font-semibold">
                {user?.name}
              </p>
              <p className="text-xs text-gray-400">
                {user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={logout}
            className="w-full bg-indigo-600 text-white py-2 rounded-xl"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}