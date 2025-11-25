import { createContext, useContext, useState } from "react";
import { registrarUsuario, loginUsuario } from "../services/usuarioService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const login = async (email, pass) => {
    try {
      const data = await loginUsuario(email, pass);

      if (!data) return false; 

      setUsuario(data);
      return true;
    } catch (err) {
      console.error("Error en login:", err);
      return false;
    }
  };

  const logout = () => {
    setUsuario(null);
  };

  const registrar = async (nombre, email, pass) => {
    return registrarUsuario(nombre, email, pass);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, registrar }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
