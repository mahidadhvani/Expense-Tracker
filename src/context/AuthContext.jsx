// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Load user from localStorage
//   useEffect(() => {
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     if (savedUser) setUser(savedUser);
//   }, []);

//   const login = (email) => {
//     const namePart = email.split("@")[0];

//     // 🔥 Convert to proper name
//     const formattedName = namePart
//       .split(/[._0-9]+/)
//       .filter(Boolean)
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");

//     const newUser = {
//       name: formattedName,
//       email,
//     };

//     localStorage.setItem("user", JSON.stringify(newUser));
//     setUser(newUser);
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);









// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // 🔄 Load user from localStorage
//   useEffect(() => {
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     if (savedUser) setUser(savedUser);
//   }, []);

//   // ✅ UPDATED LOGIN (name + email)
//   const login = (name, email) => {
//     const newUser = {
//       name: name.trim(),
//       email: email.trim().toLowerCase(),
//     };

//     localStorage.setItem("user", JSON.stringify(newUser));
//     setUser(newUser);
//   };

//   // 🚪 Logout
//   const logout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);










// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // 🔥 important

//   // 🔄 Load user from localStorage
//   useEffect(() => {
//     try {
//       const savedUser = JSON.parse(localStorage.getItem("user"));

//       if (savedUser && savedUser.name) {
//         setUser(savedUser);
//       } else {
//         setUser(null);
//       }
//     } catch (err) {
//       console.error("Invalid user data");
//       setUser(null);
//     }

//     setLoading(false); // ✅ done loading
//   }, []);

//   // ✅ LOGIN
//   const login = (name, email) => {
//     if (!name || !email) return;

//     const newUser = {
//       name: name.trim(),
//       email: email.trim().toLowerCase(),
//     };

//     localStorage.setItem("user", JSON.stringify(newUser));
//     setUser(newUser);
//   };

//   // 🚪 LOGOUT
//   const logout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);





import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ loading added

  // 🔄 Load user from localStorage (SAFE + CLEAN)
  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (savedUser && savedUser.name) {
        setUser(savedUser);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Invalid user data in localStorage");
      setUser(null);
    }

    setLoading(false); // ✅ VERY IMPORTANT
  }, []);

  // ✅ LOGIN
  const login = (name, email) => {
    if (!name || !email) return;

    const newUser = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  // 🚪 LOGOUT
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);