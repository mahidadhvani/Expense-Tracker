// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// import Dashboard from "./pages/Dashboard.jsx";
// import Transactions from "./pages/Transactions.jsx";
// import Analytics from "./pages/Analytics.jsx";
// import Budget from "./pages/Budget.jsx";
// import Settings from "./pages/Settings.jsx";

// import Sidebar from "./layout/Sidebar.jsx";
// import Navbar from "./layout/Navbar.jsx";
// import Modal from "./components/ui/Modal.jsx";

// import { useExpenses } from "./context/ExpenseContext.jsx";

// function App() {
//   const { addExpense, updateExpense } = useExpenses();

//   const [open, setOpen] = useState(false);
//   const [editData, setEditData] = useState(null);

//   // 🔥 Handle Save (Create + Update)
//   const handleSave = (data) => {
//     if (editData) {
//       updateExpense(data);
//     } else {
//       addExpense({ ...data, id: uuidv4() });
//     }
//   };

//   return (
//     <BrowserRouter>
//       <div className="flex h-screen overflow-hidden">

//         {/* 🧭 Sidebar */}
//         <Sidebar />

//         {/* 📦 Main Section */}
//         <div className="flex-1 flex flex-col bg-gray-50">

//           {/* 🔝 Navbar */}
//           <Navbar onAdd={() => setOpen(true)} />

//           {/* 📄 Pages Content */}
//           <div className="flex-1 overflow-y-auto p-4">

//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/transactions" element={<Transactions setEditData={setEditData} setOpen={setOpen} />} />
//               <Route path="/analytics" element={<Analytics />} />
//               <Route path="/budget" element={<Budget />} />
//               <Route path="/settings" element={<Settings />} />
//             </Routes>

//           </div>
//         </div>

//         {/* ➕ Modal (Add/Edit) */}
//         <Modal
//           isOpen={open}
//           onClose={() => {
//             setOpen(false);
//             setEditData(null);
//           }}
//           onSave={handleSave}
//           editData={editData}
//         />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// import Dashboard from "./pages/Dashboard.jsx";
// import Transactions from "./pages/Transactions.jsx";
// import Analytics from "./pages/Analytics.jsx";
// import Budget from "./pages/Budget.jsx";
// import Settings from "./pages/Settings.jsx";
// import Login from "./pages/Login.jsx";

// import Sidebar from "./layout/Sidebar.jsx";
// import Navbar from "./layout/Navbar.jsx";
// import Modal from "./components/ui/Modal.jsx";

// import { useExpenses } from "./context/ExpenseContext.jsx";
// import { useAuth } from "./context/AuthContext.jsx";

// function App() {
//   const { addExpense, updateExpense } = useExpenses();
//   const { user } = useAuth(); // 🔐 auth

//   const [open, setOpen] = useState(false);
//   const [editData, setEditData] = useState(null);

//   // 🔥 Handle Save (Create + Update)
//   const handleSave = (data) => {
//     if (editData) {
//       updateExpense(data);
//     } else {
//       addExpense({ ...data, id: uuidv4() });
//     }
//   };

//   // 🔐 If not logged in → show login page
//   if (!user) {
//     return <Login />;
//   }

//   // ✅ Main App UI
//   return (
//     <BrowserRouter>
//       <div className="flex h-screen overflow-hidden">

//         {/* 🧭 Sidebar */}
//         <Sidebar />

//         {/* 📦 Main Section */}
//         <div className="flex-1 flex flex-col bg-gray-50">

//           {/* 🔝 Navbar */}
//           <Navbar onAdd={() => setOpen(true)} />

//           {/* 📄 Pages */}
//           <div className="flex-1 overflow-y-auto p-4">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
              
//               <Route
//                 path="/transactions"
//                 element={
//                   <Transactions
//                     setEditData={setEditData}
//                     setOpen={setOpen}
//                   />
//                 }
//               />

//               <Route path="/analytics" element={<Analytics />} />
//               <Route path="/budget" element={<Budget />} />
//               <Route path="/settings" element={<Settings />} />
//             </Routes>
//           </div>
//         </div>

//         {/* ➕ Modal */}
//         <Modal
//           isOpen={open}
//           onClose={() => {
//             setOpen(false);
//             setEditData(null);
//           }}
//           onSave={handleSave}
//           editData={editData}
//         />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;





// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// import Dashboard from "./pages/Dashboard.jsx";
// import Transactions from "./pages/Transactions.jsx";
// import Analytics from "./pages/Analytics.jsx";
// import Budget from "./pages/Budget.jsx";
// import Settings from "./pages/Settings.jsx";
// import Login from "./pages/Login.jsx";

// import Sidebar from "./layout/Sidebar.jsx";
// import Navbar from "./layout/Navbar.jsx";
// import Modal from "./components/ui/Modal.jsx";

// import { useExpenses } from "./context/ExpenseContext.jsx";
// import { useAuth } from "./context/AuthContext.jsx";

// function App() {
//   const { addExpense, updateExpense } = useExpenses();
//   const { user } = useAuth();

//   const [open, setOpen] = useState(false);
//   const [editData, setEditData] = useState(null);

//   const handleSave = (data) => {
//     if (editData) {
//       updateExpense(data);
//     } else {
//       addExpense({ ...data, id: uuidv4() });
//     }
//   };

//   // 🔐 Protected Layout
//   const ProtectedLayout = ({ children }) => {
//     if (!user) {
//       return <Navigate to="/login" />;
//     }

//     return (
//       <div className="flex h-screen overflow-hidden">
//         <Sidebar />

//         <div className="flex-1 flex flex-col bg-gray-50">
//           <Navbar onAdd={() => setOpen(true)} />

//           <div className="flex-1 overflow-y-auto p-4">
//             {children}
//           </div>
//         </div>

//         <Modal
//           isOpen={open}
//           onClose={() => {
//             setOpen(false);
//             setEditData(null);
//           }}
//           onSave={handleSave}
//           editData={editData}
//         />
//       </div>
//     );
//   };

//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* 🔐 LOGIN PAGE FIRST */}
//         <Route
//           path="/login"
//           element={user ? <Navigate to="/" /> : <Login />}
//         />

//         {/* 🔒 PROTECTED ROUTES */}
//         <Route
//           path="/"
//           element={
//             <ProtectedLayout>
//               <Dashboard />
//             </ProtectedLayout>
//           }
//         />

//         <Route
//           path="/transactions"
//           element={
//             <ProtectedLayout>
//               <Transactions
//                 setEditData={setEditData}
//                 setOpen={setOpen}
//               />
//             </ProtectedLayout>
//           }
//         />

//         <Route
//           path="/analytics"
//           element={
//             <ProtectedLayout>
//               <Analytics />
//             </ProtectedLayout>
//           }
//         />

//         <Route
//           path="/budget"
//           element={
//             <ProtectedLayout>
//               <Budget />
//             </ProtectedLayout>
//           }
//         />

//         <Route
//           path="/settings"
//           element={
//             <ProtectedLayout>
//               <Settings />
//             </ProtectedLayout>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;








// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// import Dashboard from "./pages/Dashboard.jsx";
// import Transactions from "./pages/Transactions.jsx";
// import Analytics from "./pages/Analytics.jsx";
// import Budget from "./pages/Budget.jsx";
// import Settings from "./pages/Settings.jsx";
// import Login from "./pages/Login.jsx";

// import Sidebar from "./layout/Sidebar.jsx";
// import Navbar from "./layout/Navbar.jsx";
// import Modal from "./components/ui/Modal.jsx";

// import { useExpenses } from "./context/ExpenseContext.jsx";
// import { useAuth } from "./context/AuthContext.jsx";

// function App() {
//   const { addExpense, updateExpense } = useExpenses();

//   // 🔥 IMPORTANT: take loading also
//   const { user, loading } = useAuth();

//   const [open, setOpen] = useState(false);
//   const [editData, setEditData] = useState(null);

//   const handleSave = (data) => {
//     if (editData) {
//       updateExpense(data);
//     } else {
//       addExpense({ ...data, id: uuidv4() });
//     }
//   };

//   // ⏳ Wait until auth is loaded
//   if (loading) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <p className="text-gray-500">Loading...</p>
//       </div>
//     );
//   }

//   // 🔐 Protected Layout
//   const ProtectedLayout = ({ children }) => {
//     if (!user) {
//       return <Navigate to="/login" />;
//     }

//     return (
//       <div className="flex h-screen overflow-hidden">
//         <Sidebar />

//         <div className="flex-1 flex flex-col bg-gray-50">
//           <Navbar onAdd={() => setOpen(true)} />

//           <div className="flex-1 overflow-y-auto p-4">
//             {children}
//           </div>
//         </div>

//         {/* ➕ Modal */}
//         <Modal
//           isOpen={open}
//           onClose={() => {
//             setOpen(false);
//             setEditData(null);
//           }}
//           onSave={handleSave}
//           editData={editData}
//         />
//       </div>
//     );
//   };

//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* 🔐 Login Route */}
//         <Route
//           path="/login"
//           element={user ? <Navigate to="/" /> : <Login />}
//         />

//         {/* 🔒 Protected Routes */}
//         <Route
//           path="/"
//           element={
//             <ProtectedLayout>
//               <Dashboard />
//             </ProtectedLayout>
//           }
//         />

//         <Route
//           path="/transactions"
//           element={
//             <ProtectedLayout>
//               <Transactions
//                 setEditData={setEditData}
//                 setOpen={setOpen}
//               />
//             </ProtectedLayout>
//           }
//         />

//         <Route
//           path="/analytics"
//           element={
//             <ProtectedLayout>
//               <Analytics />
//             </ProtectedLayout>
//           }
//         />

//         <Route
//           path="/budget"
//           element={
//             <ProtectedLayout>
//               <Budget />
//             </ProtectedLayout>
//           }
//         />

//         <Route
//           path="/settings"
//           element={
//             <ProtectedLayout>
//               <Settings />
//             </ProtectedLayout>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;









// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// import Dashboard from "./pages/Dashboard.jsx";
// import Transactions from "./pages/Transactions.jsx";
// import Analytics from "./pages/Analytics.jsx";
// import Budget from "./pages/Budget.jsx";
// import Settings from "./pages/Settings.jsx";
// import Login from "./pages/Login.jsx";

// import Sidebar from "./layout/Sidebar.jsx";
// import Navbar from "./layout/Navbar.jsx";
// import Modal from "./components/ui/Modal.jsx";

// import { useExpenses } from "./context/ExpenseContext.jsx";
// import { useAuth } from "./context/AuthContext.jsx";

// function App() {
//   const { addExpense, updateExpense } = useExpenses();

//   // ✅ AUTH (with loading)
//   const { user, loading } = useAuth();

//   const [open, setOpen] = useState(false);
//   const [editData, setEditData] = useState(null);

//   const handleSave = (data) => {
//     if (editData) {
//       updateExpense(data);
//     } else {
//       addExpense({ ...data, id: uuidv4() });
//     }
//   };

//   // ✅ FIX: Prevent flicker / wrong routing
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // 🔐 Protected Layout
//   const ProtectedLayout = ({ children }) => {
//     if (!user) {
//       return <Navigate to="/login" />;
//     }

//     return (
//       <div className="flex h-screen overflow-hidden">
//         <Sidebar />

//         <div className="flex-1 flex flex-col bg-gray-50">
//           <Navbar onAdd={() => setOpen(true)} />

//           <div className="flex-1 overflow-y-auto p-4">
//             {children}
//           </div>
//         </div>

//         {/* ➕ Modal */}
//         <Modal
//           isOpen={open}
//           onClose={() => {
//             setOpen(false);
//             setEditData(null);
//           }}
//           onSave={handleSave}
//           editData={editData}
//         />
//       </div>
//     );
//   };

//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* 🔐 Login Route */}
//         <Route
//           path="/login"
//           element={user ? <Navigate to="/" /> : <Login />}
//         />

//         {/* 🔒 Protected Routes */}
//         <Route
//           path="/"
//           element={
//             <ProtectedLayout>
//               <Dashboard />
//             </ProtectedLayout>
//           }
//         />

//         <Route
//           path="/transactions"
//           element={
//             <ProtectedLayout>
//               <Transactions
//                 setEditData={setEditData}
//                 setOpen={setOpen}
//               />
//             </ProtectedLayout>
//           }
//         />

//         <Route
//           path="/analytics"
//           element={
//             <ProtectedLayout>
//               <Analytics />
//             </ProtectedLayout>
//           }
//         />

//         <Route
//           path="/budget"
//           element={
//             <ProtectedLayout>
//               <Budget />
//             </ProtectedLayout>
//           }
//         />

//         <Route
//           path="/settings"
//           element={
//             <ProtectedLayout>
//               <Settings />
//             </ProtectedLayout>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;







import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Dashboard from "./pages/Dashboard.jsx";
import Transactions from "./pages/Transactions.jsx";
import Analytics from "./pages/Analytics.jsx";
import Budget from "./pages/Budget.jsx";
import Settings from "./pages/Settings.jsx";
import Login from "./pages/Login.jsx";

import Sidebar from "./layout/Sidebar.jsx";
import Navbar from "./layout/Navbar.jsx";
import Modal from "./components/ui/Modal.jsx";

import { useExpenses } from "./context/ExpenseContext.jsx";
import { useAuth } from "./context/AuthContext.jsx";

function App() {
  const { addExpense, updateExpense } = useExpenses();
  const { user, loading } = useAuth();

  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  // 🔥 NEW: Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSave = (data) => {
    if (editData) {
      updateExpense(data);
    } else {
      addExpense({ ...data, id: uuidv4() });
    }
  };

  // ⏳ Prevent flicker
  if (loading) {
    return <div>Loading...</div>;
  }

  // 🔐 Protected Layout
  const ProtectedLayout = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return (
      <div className="flex h-screen overflow-hidden">

        {/* ✅ Sidebar with control */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="flex-1 flex flex-col bg-gray-50">

          {/* ✅ Navbar with menu click */}
          <Navbar
            onAdd={() => setOpen(true)}
            onMenuClick={() =>
              setSidebarOpen((prev) => !prev)
            }
          />

          <div className="flex-1 overflow-y-auto p-4">
            {children}
          </div>
        </div>

        {/* ➕ Modal */}
        <Modal
          isOpen={open}
          onClose={() => {
            setOpen(false);
            setEditData(null);
          }}
          onSave={handleSave}
          editData={editData}
        />
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* 🔐 Login */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />

        {/* 🔒 Protected */}
        <Route
          path="/"
          element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          }
        />

        <Route
          path="/transactions"
          element={
            <ProtectedLayout>
              <Transactions
                setEditData={setEditData}
                setOpen={setOpen}
              />
            </ProtectedLayout>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedLayout>
              <Analytics />
            </ProtectedLayout>
          }
        />

        <Route
          path="/budget"
          element={
            <ProtectedLayout>
              <Budget />
            </ProtectedLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedLayout>
              <Settings />
            </ProtectedLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;