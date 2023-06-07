import React, { useState, useEffect, createContext } from "react";
import { setAuthTokenHeader } from "../api/axios";

const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log("effect auth context");
    let token = localStorage.getItem("jwttoken");

    if (token) {
      setAuthTokenHeader(token);
      setUser(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
