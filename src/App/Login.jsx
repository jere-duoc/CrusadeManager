import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

import '../assets/style_nuevo/index.css';
import '../assets/style_nuevo/styles.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  
  const [error, setError] = useState("");   // Mensaje Rojo
  const [success, setSuccess] = useState(""); // Mensaje Verde

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // --- EFECTO: DETECTAR SI VIENE DEL BACKEND (Redirección de Verificación) ---
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const status = params.get("status");

    if (status === "success") {
        setSuccess("¡Cuenta verificada con éxito! Ya puedes entrar.");
        window.history.replaceState({}, document.title, "/login");
    } else if (status === "error") {
        setError("El enlace de verificación es inválido o ya expiró.");
        window.history.replaceState({}, document.title, "/login");
    }
  }, [location]);

  // --- LÓGICA DE LOGIN (CORREGIDA CON TRY/CATCH) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(""); 

    if (!email || !pass) {
      setError("Completa todos los campos.");
      return;
    }

    try {
        // 1. Si el login falla (401, 403, 404), esta línea LANZA una excepción HTTP
        await login(email, pass); 
        // 2. Solo navega si la respuesta fue 200 OK
        navigate("/home-log"); 
    } catch (err) {
        // 3. Atrapa la excepción y traduce el error de seguridad
        console.error("Login Fallido:", err);
        
        const mensaje = err.response?.data || "Error al iniciar sesión";
        
        if (typeof mensaje === 'string') {
            if (mensaje.includes("no verificada")) {
                 setError("⚠️ Tu cuenta no está verificada. Revisa tu correo.");
            } else if (mensaje.includes("incorrecta") || mensaje.includes("no existe")) {
                 setError("Credenciales incorrectas.");
            } else {
                 setError(mensaje); // Otros errores del servidor
            }
        } else {
            setError("Error al iniciar sesión.");
        }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark bg-opacity-25">
      <section className="card p-4 shadow-lg text-light bg-secondary bg-opacity-50" style={{ maxWidth: "380px", borderRadius: "20px" }}>
        <h2 className="text-center mb-3 fw-bold">Iniciar Sesión</h2>
        <p>Accede a tus cruzadas, estadísticas y emparejamientos.</p>

        <form onSubmit={handleSubmit} className="form auth-form">
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              className="form-control bg-dark text-light border-0"
              placeholder="ejemplo@crusade.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control bg-dark text-light border-0"
              placeholder="••••••••"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>

          {/* MENSAJE DE ÉXITO (VERDE) */}
          {success && (
            <div 
              className="text-center p-2 mb-3 rounded fade show"
              style={{
                backgroundColor: "rgba(25, 135, 84, 0.2)",
                border: "1px solid rgba(25, 135, 84, 0.4)",
                color: "#75b798",
                fontSize: "0.9rem"
              }}
            >
              ✅ {success}
            </div>
          )}

          {/* MENSAJE DE ERROR (ROJO) */}
          {error && (
            <div 
              className="text-center p-2 mb-3 rounded fade show"
              style={{
                backgroundColor: "rgba(220, 53, 69, 0.15)",
                border: "1px solid rgba(220, 53, 69, 0.4)",
                color: "#ff6b6b",
                fontSize: "0.9rem"
              }}
            >
              ⚠️ {error}
            </div>
          )}

          <div className="d-grid mt-3">
            <button className="btn btn-outline-light fw-semibold" type="submit">
              Entrar
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-light">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="link-light text-decoration-underline">
            Regístrate aquí
          </Link>
        </p>
      </section>
    </div>
  );
}