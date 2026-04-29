// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function Login() {
//   const { login } = useAuth();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = () => {
//     // ❌ Empty validation
//     if (!name || !email) {
//       setError("All fields are required");
//       return;
//     }

//     // ❌ Uppercase email check
//     if (email !== email.toLowerCase()) {
//       setError("Email must be in lowercase");
//       return;
//     }

//     // ❌ Basic email format
//     if (!email.includes("@")) {
//       setError("Invalid email format");
//       return;
//     }

//     setError("");
//     login(name, email);
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow w-[350px] space-y-4">

//         <h2 className="text-xl font-bold">Login</h2>

//         {/* 👤 Name */}
//         <input
//           type="text"
//           placeholder="Enter name"
//           className="w-full border p-2 rounded"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         {/* 📧 Email */}
//         <input
//           type="text"
//           placeholder="Enter email"
//           className="w-full border p-2 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         {/* ❌ Error */}
//         {error && (
//           <p className="text-red-500 text-sm">{error}</p>
//         )}

//         <button
//           onClick={handleLogin}
//           className="w-full bg-indigo-600 text-white py-2 rounded-xl"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!name || !email) {
      setError("All fields are required");
      return;
    }

    if (email !== email.toLowerCase()) {
      setError("Email must be in lowercase");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }

    setError("");
    login(name, email);
  };

  return (
    <div className="h-screen flex">

      {/* 🔵 LEFT SIDE (Branding) */}
      <div className="hidden md:flex flex-1 bg-gradient-to-br from-indigo-600 to-purple-600 text-white items-center justify-center p-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            ExpenseTrack 💰
          </h1>
          <p className="text-lg opacity-90">
            Manage your finances like a pro.
          </p>
        </div>
      </div>

      {/* ⚪ RIGHT SIDE (Login Form) */}
      <div className="flex flex-1 items-center justify-center bg-gray-100">

        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl w-[350px] space-y-5">

          <h2 className="text-2xl font-bold text-center">
            Welcome Back 👋
          </h2>

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email */}
          <input
            type="text"
            placeholder="Email address"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-semibold transition"
          >
            Sign In
          </button>

          <p className="text-xs text-center text-gray-400">
            Built with ❤️ by you
          </p>

        </div>
      </div>
    </div>
  );
}