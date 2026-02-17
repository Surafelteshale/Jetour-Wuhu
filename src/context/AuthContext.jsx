import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

// 1️⃣ Create context
const AuthContext = createContext(null);

// 2️⃣ Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Persist login on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("jetourUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("jetourUser", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("jetourUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Hook to consume context
export const useAuth = () => {
  return useContext(AuthContext);
};  
