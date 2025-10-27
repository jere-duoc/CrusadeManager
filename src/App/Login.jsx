import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

import '../assets/style_nuevo/index.css';
import '../assets/style_nuevo/styles.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !pass) {
      setError("Completa todos los campos.");
      return;
    }

    const ok = login(email, pass);

    if (!ok) {
      setError("Credenciales incorrectas.");
      return;
    }

    navigate("/home-log");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark bg-opacity-25">
      <section className="card p-4 shadow-lg text-light bg-secondary bg-opacity-50" style={{ maxWidth: "380px", borderRadius: "20px" }}>
        <h2 className="text-center mb-3 fw-bold">Iniciar Sesión</h2>
        <p>
          Accede a tus cruzadas, estadísticas y emparejamientos.
        </p>

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

          {error && (
            <p className="text-danger text-center fw-semibold">{error}</p>
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