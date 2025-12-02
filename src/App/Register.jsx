import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

// Importamos tus estilos
import '../assets/style_nuevo/index.css';
import '../assets/style_nuevo/styles.css';

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // Estados para errores visuales
  const [errores, setErrores] = useState({}); 
  const [generalError, setGeneralError] = useState("");
  const [loading, setLoading] = useState(false);

  const { registrar } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrores({});
    setGeneralError("");

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // --- 1. VALIDACIONES LOCALES ---
    if (!nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!email) {
        newErrors.email = "El correo es obligatorio.";
    } else if (!emailRegex.test(email)) {
        newErrors.email = "El formato no es válido (falta @).";
    }
    if (!pass) {
        newErrors.pass = "La contraseña es obligatoria.";
    } else if (pass.length < 6) {
        newErrors.pass = "Mínimo 6 caracteres.";
    }
    if (pass !== confirmPass) {
        newErrors.confirmPass = "Las contraseñas no coinciden.";
    }

    if (Object.keys(newErrors).length > 0) {
        setErrores(newErrors);
        return;
    }

    // --- 2. COMUNICACIÓN CON BACKEND ---
    try {
      setLoading(true);
      
      await registrar(nombre, email, pass);
      
      // ÉXITO: El Backend ya envió el correo, ahora avisamos al usuario
      alert("¡Cuenta creada! Revisa tu bandeja (y SPAM) para activar tus credenciales.");
      navigate("/login");

    } catch (err) {
      console.error("Error del Backend:", err);
      
      const mensajeServidor = err.response?.data || err.message;

      // Manejo de errores que vienen del Service de Java
      if (typeof mensajeServidor === 'string') {
          if (mensajeServidor.includes("registrado")) {
              // Error 400: Correo duplicado
              setErrores({ email: "Este correo ya está registrado." });
          } 
          else if (mensajeServidor.includes("No se pudo enviar")) {
              // Error 500: Falló el envío del correo y el usuario fue borrado (ROLLBACK)
              setErrores({ email: "No se pudo enviar el correo de verificación. Verifica la dirección o intenta más tarde." });
          } 
          else {
              setGeneralError(mensajeServidor);
          }
      } else {
          setGeneralError("Error desconocido al registrar.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark bg-opacity-25">
      <section
        className="card p-4 shadow-lg text-light bg-secondary bg-opacity-50"
        style={{ maxWidth: "400px", borderRadius: "20px" }}
      >
        <h2 className="text-center mb-3 fw-bold">Crear Cuenta</h2>
        <p>Únete a las cruzadas, registra tu ejército y escala en el ranking.</p>

        <form onSubmit={handleSubmit} className="form auth-form" noValidate>
          
          {/* NOMBRE */}
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control bg-dark text-light border-0 ${errores.nombre ? 'is-invalid' : ''}`}
              placeholder="Ej. Inquisidor Valeria"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
          </div>

          {/* CORREO */}
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              className={`form-control bg-dark text-light border-0 ${errores.email ? 'is-invalid' : ''}`}
              placeholder="ejemplo@crusade.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errores.email && <div className="invalid-feedback">{errores.email}</div>}
          </div>

          {/* CONTRASEÑA */}
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className={`form-control bg-dark text-light border-0 ${errores.pass ? 'is-invalid' : ''}`}
              placeholder="Mínimo 6 caracteres"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
             {errores.pass && <div className="invalid-feedback">{errores.pass}</div>}
          </div>

          {/* CONFIRMAR */}
          <div className="mb-3">
            <label className="form-label">Confirmar Contraseña</label>
            <input
              type="password"
              className={`form-control bg-dark text-light border-0 ${errores.confirmPass ? 'is-invalid' : ''}`}
              placeholder="Repite tu contraseña"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
             {errores.confirmPass && <div className="invalid-feedback">{errores.confirmPass}</div>}
          </div>

          {/* ERROR GENERAL ESTILIZADO */}
          {generalError && (
             <div 
               className="text-center p-2 mb-3 rounded fade show"
               style={{
                 backgroundColor: "rgba(220, 53, 69, 0.15)",
                 border: "1px solid rgba(220, 53, 69, 0.4)",
                 color: "#ff6b6b",
                 fontSize: "0.9rem"
               }}
             >
              ⚠️ {generalError}
            </div>
          )}

          <div className="d-grid mt-3">
            <button className="btn btn-outline-light fw-semibold" type="submit" disabled={loading}>
              {loading ? "Registrando..." : "Registrarme"}
            </button>
          </div>
        </form>

        <p className="text-center mt-4 text-light">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="link-light text-decoration-underline">
            Inicia sesión
          </Link>
        </p>
      </section>
    </div>
  );
}