import { createContext, useContext, useState, useEffect } from "react";
import { registrarUsuario, loginUsuario } from "../services/usuarioService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario_warhammer");
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
    setCargando(false);
  }, []);

  const login = async (email, pass) => {
    try {
      const data = await loginUsuario(email, pass);
      if (!data) return false; 

      setUsuario(data); 
      localStorage.setItem("usuario_warhammer", JSON.stringify(data)); 

      return true;
    } catch (err) {
      console.error("Error en login:", err);
      return false;
    }
  };

  const updateUser = (nuevosDatos) => {
    try {

      const usuarioActualizado = { ...usuario, ...nuevosDatos };
      
      localStorage.setItem("usuario_warhammer", JSON.stringify(usuarioActualizado));
      
      setUsuario(usuarioActualizado);
      
    } catch (error) {

      console.error("Error al guardar:", error);
      alert("No se pudo guardar la imagen. Es posible que sea demasiado pesada (límite aprox 5MB).");
    }
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario_warhammer");
  };

  const registrar = async (nombre, email, pass) => {
    return registrarUsuario(nombre, email, pass);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, registrar, updateUser }}>
      {!cargando && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}