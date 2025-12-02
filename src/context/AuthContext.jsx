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

  // --- FUNCIÓN LOGIN CORREGIDA ---
  // Ahora permite que los errores de loginUsuario (HTTP 4xx) 
  // se propaguen a los componentes que llaman (Login.jsx).
  const login = async (email, pass) => {
    // Si loginUsuario falla (401, 403, 404), lanzará una excepción 
    // y el código de abajo no se ejecutará.
    const data = await loginUsuario(email, pass);
    
    // Si la promesa se resuelve (200 OK):
    setUsuario(data); 
    localStorage.setItem("usuario_warhammer", JSON.stringify(data)); 

    return true;
  };
  // ---------------------------------

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