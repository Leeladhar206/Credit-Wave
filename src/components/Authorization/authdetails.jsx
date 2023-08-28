import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const userLogin = () => {
    setIsAuthenticated(true);
  };

  const userLogout = () => {
    setIsAuthenticated(false);
  };

  console.log(isAuthenticated);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userLogin, userLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
