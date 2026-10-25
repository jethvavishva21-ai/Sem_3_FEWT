import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null when logged out, object when logged in

  const login = (username, password) => {
    // Static Authentication Check
    if (username === "admin" && password === "12345") {
      setUser({
        username: "admin",
        role: "Administrator",
        email: "admin@darshan.ac.in",
      });
      return { success: true };
    }
    return {
      success: false,
      message: "Invalid username or password! (Try: admin / 12345)",
    };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for consuming auth context
export const useAuth = () => useContext(AuthContext);