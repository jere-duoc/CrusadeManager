import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const guardado = localStorage.getItem("usuarioActivo");
    if (guardado) {
      setUsuario(JSON.parse(guardado));
    }
    setLoading(false);
  }, []);

  const login = (email, pass) => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const user = usuarios.find(
      (u) => u.email === email && u.pass === pass
    );

    if (user) {
      setUsuario(user);
      localStorage.setItem("usuarioActivo", JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuarioActivo");
  };

  const registrar = (nombre, email, pass) => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuarios.some((u) => u.email === email)) {
      throw new Error("Este correo ya está registrado.");
    }

    const nuevo = {
      id: Date.now(),
      nombre,
      email,
      pass,
    };

    usuarios.push(nuevo);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    return nuevo;
  };

  return (
    <AuthContext.Provider
      value={{ usuario, loading, login, logout, registrar }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
